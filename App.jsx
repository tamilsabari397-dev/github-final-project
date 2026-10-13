import { ArrowRight, Leaf } from 'lucide-react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
import Navbar from './Navbar.jsx'
import ProductList from './ProductList.jsx'

function LandingPage() {
  return (
    <main className="landing-page">
      <header className="landing-header">
        <Link className="landing-brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand-mark"><Leaf size={19} /></span>
          Paradise <strong>Nursery</strong>
        </Link>
        <a className="landing-about-link" href="#about">Our approach</a>
      </header>
      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="hero-copy">
          <p className="eyebrow">A little more green</p>
          <h1 id="landing-title">Paradise<br />Nursery</h1>
          <p className="hero-description">Thoughtfully chosen houseplants for the corners, windowsills, and quiet moments that make a home yours.</p>
          <Link className="button button-light" to="/plants">Get Started <ArrowRight size={18} /></Link>
          <p className="hero-note">Good plants. Good days. Grown together.</p>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>MAKE ROOM</span>
          <Leaf size={28} strokeWidth={1.4} />
          <span>FOR GROWTH</span>
        </div>
      </section>
      <AboutUs />
      <footer className="site-footer landing-footer">
        <span>Paradise Nursery</span>
        <span>Bring a little life home.</span>
      </footer>
    </main>
  )
}

function ShopLayout() {
  return (
    <div className="shop-shell">
      <Navbar />
      <Outlet />
      <footer className="site-footer shop-footer">
        <span>Paradise Nursery</span>
        <span>Grown with care. Sent with care.</span>
      </footer>
    </div>
  )
}

function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Wrong turn, right garden</p>
      <h1>Let’s find your way back.</h1>
      <Link className="button button-dark" to="/">Go home <ArrowRight size={17} /></Link>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<ShopLayout />}>
        <Route path="plants" element={<ProductList />} />
        <Route path="cart" element={<CartItem />} />
        <Route path="about" element={<Navigate to="/#about" replace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}