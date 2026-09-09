import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Designer from './pages/Designer/Designer'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import Checkout from './pages/Checkout/Checkout'

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)

  const path = window.location.pathname.toLowerCase()

  const isCheckout =
    path === '/checkout' ||
    path === '/checkout/'

  let page

  // ANA SAYFA
  if (path === '/' || path === '') {
    page = <Home />

  // ÜRÜNLER
  } else if (
    path === '/products' ||
    path === '/products/' ||
    path === '/urunler' ||
    path === '/urunler/'
  ) {
    page = <Products />

  // ÜRÜN DETAY
  } else if (
    path.startsWith('/products/') ||
    path.startsWith('/urunler/')
  ) {
    const productId = path
      .split('/')
      .filter(Boolean)
      .pop()

    page = <ProductDetail productId={productId} />

  // KENDİN TASARLA
  } else if (
    path === '/designer' ||
    path === '/designer/'
  ) {
    page = <Designer />

  // PROJELER
  } else if (
    path === '/projects' ||
    path === '/projects/' ||
    path === '/projeler' ||
    path === '/projeler/'
  ) {
    page = <Projects />

  // HAKKIMIZDA
  } else if (
    path === '/about' ||
    path === '/about/' ||
    path === '/hakkimizda' ||
    path === '/hakkimizda/'
  ) {
    page = <About />

  // BLOG
  } else if (
    path === '/blog' ||
    path === '/blog/'
  ) {
    page = <Blog />

  // S.S.S.
  } else if (
    path === '/faq' ||
    path === '/faq/' ||
    path === '/sss' ||
    path === '/sss/'
  ) {
    page = <FAQ />

  // İLETİŞİM
  } else if (
    path === '/contact' ||
    path === '/contact/' ||
    path === '/iletisim' ||
    path === '/iletisim/'
  ) {
    page = <Contact />

  // CHECKOUT
  } else if (isCheckout) {
    page = <Checkout />

  // TANIMSIZ SAYFA → ANA SAYFA
  } else {
    page = <Home />
  }

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* SAYFA */}
      {page}

      {/* CHECKOUT SAYFASINDA FOOTER GÖSTERME */}
      {!isCheckout && <Footer />}

      {/* SEPET PANELİ */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {/* SAĞ ALT SEPET BUTONU */}
      {!isCheckout && (
        <button
          type="button"
          className="global-cart-button"
          onClick={() => setCartOpen(true)}
          aria-label="Sepeti aç"
        >
          <ShoppingCart size={22} />
        </button>
      )}
    </>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App