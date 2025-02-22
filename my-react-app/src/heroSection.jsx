import { useState } from 'react'
import { displayWeather } from './script';

function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex flex-col justify-center items-center my-[10px]'>
       <div className="text-xl text-white" id="weatherCity">Toronto</div>
       <div className="" id="weatherIcon"></div>
       <div className="text-white text-6xl" id="weatherTemperature"></div>
       <div className="text-white text-xl" id="weatherCondition"></div>
      </div>
    </>
  )
}

<script src="script.js"></script>
export default HeroSection