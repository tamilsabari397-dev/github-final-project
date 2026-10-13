import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, updateQuantity } from './CartSlice.jsx'

const formatPrice = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(amount)

function CartRow({ item, dispatch }) {
  return (
    <article className="cart-row">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-name">
        <span className="cart-item-category">{item.category.replaceAll('-', ' ')}</span>
        <h2>{item.name}</h2>
        <span className="cart-unit-price">{formatPrice(item.price)} <small>each</small></span>
      </div>
      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
        <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1} aria-label={`Decrease ${item.name} quantity`} title="Decrease quantity"><Minus size={15} /></button>
        <span aria-live="polite">{item.quantity}</span>
        <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} aria-label={`Increase ${item.name} quantity`} title="Increase quantity"><Plus size={15} /></button>
      </div>
      <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
      <button className="remove-item-button" type="button" onClick={() => dispatch(removeItem(item.id))} aria-label={`Remove ${item.name}`} title="Remove item"><Trash2 size={17} /></button>
    </article>
  )
}

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const [checkoutMessage, setCheckoutMessage] = useState('')
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="cart-page">
      <div className="cart-page-heading">
        <div>
          <p className="eyebrow">Your growing collection</p>
          <h1>Shopping cart</h1>
        </div>
        <span className="cart-page-count"><ShoppingBag size={17} /> {itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
      </div>
      {items.length === 0 ? (
        <section className="empty-cart" aria-labelledby="empty-cart-title">
          <span className="empty-cart-icon"><ShoppingBag size={29} strokeWidth={1.5} /></span>
          <p className="eyebrow">Nothing in the basket yet</p>
          <h2 id="empty-cart-title">Your next favorite plant is out there.</h2>
          <p>Take a look around and find a little green for your space.</p>
          <Link className="button button-dark" to="/plants">Continue shopping <ArrowLeft size={17} /></Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list" aria-label="Items in your cart">
            <div className="cart-list-labels"><span>Plant</span><span>Quantity</span><span>Total</span><span /></div>
            {items.map((item) => <CartRow key={item.id} item={item} dispatch={dispatch} />)}
            <Link className="back-to-plants" to="/plants"><ArrowLeft size={16} /> Continue shopping</Link>
          </section>
          <aside className="order-summary" aria-labelledby="summary-title">
            <p className="eyebrow">A little life, on its way</p>
            <h2 id="summary-title">Order summary</h2>
            <div className="summary-line"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
            <div className="summary-line"><span>Delivery</span><span className="delivery-note">Calculated at checkout</span></div>
            <div className="summary-total"><span>Estimated total</span><strong>{formatPrice(total)}</strong></div>
            <button className="button button-dark checkout-button" type="button" onClick={() => setCheckoutMessage('Checkout is coming soon. Your plants are still safely in your cart.')}>Continue to checkout <ArrowLeft className="checkout-arrow" size={17} /></button>
            <p className="checkout-message" aria-live="polite">{checkoutMessage}</p>
            <p className="summary-footnote">Taxes and delivery are calculated at checkout.</p>
          </aside>
        </div>
      )}
    </main>
  )
}