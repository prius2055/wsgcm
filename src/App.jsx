import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Beliefs from './pages/Beliefs.jsx'
import Salvation from './pages/Salvation.jsx'
import Messages from './pages/Messages.jsx'
import Give from './pages/Give.jsx'
import Prayer from './pages/Prayer.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-believe" element={<Beliefs />} />
          <Route path="/salvation" element={<Salvation />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/give" element={<Give />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
