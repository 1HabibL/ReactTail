import { useState } from 'react'
import SearchBar from './searchBar.jsx'
import HeroSection from './heroSection.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
  <SearchBar />
  <HeroSection />
      </div>
    </>
  )
}

export default App
