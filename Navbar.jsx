import { Leaf, ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const count = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="shop-header">
      <NavLink className="brand-lockup" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={19} strokeWidth={1.8} /></span>
        <span>Paradise <strong>Nursery</strong></span>
      </NavLink>
      <nav className="shop-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav-link" to="/cart" aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}>
          <ShoppingBag size={18} aria-hidden="true" />
          <span>Cart</span>
          <span className="cart-count" aria-live="polite">{count}</span>
        </NavLink>
      </nav>
    </header>
  )
}