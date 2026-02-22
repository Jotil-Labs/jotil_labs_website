import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { ChatWidget } from './components/widgets/ChatWidget'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Terms } from './pages/Terms'
import { OptIn } from './pages/OptIn'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/opt-in" element={<OptIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
