import { useState } from 'react'

function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex justify-center flex-col'>
       <div>WEATHER CONDITION LOGO</div>
       <div>WEATHER CONDITION NUMBER</div>
       <div>ACTUAL WEATHER CONDITION TEXT</div>
      </div>
    </>
  )
}

export default HeroSection