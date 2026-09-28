import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FactsBar from './components/FactsBar'
import Academics from './components/Academics'
import CampusLife from './components/CampusLife'
import Admissions from './components/Admissions'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <FactsBar />
        <Academics />
        <CampusLife />
        <Admissions />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App
