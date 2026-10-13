import { Check, Leaf, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from './CartSlice.jsx'
import { categories, plants } from './plants.js'

function ProductCard({ plant, added, onAdd }) {
  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img src={plant.image} alt={`${plant.name} houseplant`} loading="lazy" />
        <span className="plant-category-tag">{categories.find((category) => category.id === plant.category)?.name}</span>
      </div>
      <div className="plant-card-info">
        <div>
          <h3>{plant.name}</h3>
          <p className="plant-price">${plant.price.toFixed(2)}</p>
        </div>
        <button className={`add-button${added ? ' is-added' : ''}`} type="button" onClick={onAdd} disabled={added} aria-label={added ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}>
          {added ? <Check size={17} /> : <Plus size={17} />}
          <span>{added ? 'Added' : 'Add to cart'}</span>
        </button>
      </div>
    </article>
  )
}

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const cartIds = new Set(cartItems.map((item) => item.id))

  return (
    <main className="catalogue-page">
      <section className="catalogue-heading">
        <div>
          <p className="eyebrow">The indoor collection</p>
          <h1>Find your kind of green.</h1>
          <p>Easygoing companions, bright-window beauties, and leaves that make a room.</p>
        </div>
        <Link className="catalogue-cart-shortcut" to="/cart"><Leaf size={17} /> Your basket <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span></Link>
      </section>
      <nav className="category-jump" aria-label="Plant categories">
        {categories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.name}</a>)}
      </nav>
      <div className="catalogue-groups">
        {categories.map((category) => (
          <section className="plant-category" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
            <div className="category-heading">
              <div>
                <p className="eyebrow">{String(categories.indexOf(category) + 1).padStart(2, '0')} / Collection</p>
                <h2 id={`${category.id}-title`}>{category.name}</h2>
                <p>{category.description}</p>
              </div>
              <span className="category-count">06 plants</span>
            </div>
            <div className="plant-grid">
              {plants.filter((plant) => plant.category === category.id).map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  added={cartIds.has(plant.id)}
                  onAdd={() => dispatch(addItem(plant))}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="catalogue-endnote">A good home for every kind of leaf. <Leaf size={15} /></p>
    </main>
  )
}