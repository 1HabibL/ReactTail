import { useState } from 'react'
import { displayWeather } from './script';

function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex flex-col justify-center items-center'>
       <div id="weatherCity">Toronto</div>
       <div id="weatherIcon"></div>
       <div id="weatherTemperature"></div>
       <div id="weatherCondition"></div>
      </div>
    </>
  )
}

<script src="script.js"></script>
export default HeroSection