import { useState } from 'react'
import SearchBar from './searchBar.jsx'
import HeroSection from './heroSection.jsx'
import ForeSection from './Forecast.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
  <SearchBar />
  <HeroSection />
  <ForeSection />
      </div>
    </>
  )
}

export default App
