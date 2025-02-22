import { useState } from 'react'
import SearchBar from './searchBar.jsx'
import HeroSection from './heroSection.jsx'
import ForeSection from './Forecast.jsx'
import WindDirection from './windDirection.jsx'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div class="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 to bg-purple-300">
  <SearchBar />
  <HeroSection />
  <ForeSection />
  <WindDirection />
      </div>
    </>
  )
}

export default App
