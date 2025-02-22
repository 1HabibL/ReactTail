import { useState } from 'react'
import { displayWeather } from './script';
import { getCoordinates } from './Forecast';
import { getWeather } from './Forecast';
import { displayForeCast2} from './Forecast';


function ForeSection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex flex-col justify-center items-center rounded-4xl bg-blue-900/50 my-[10px]  w-[35vw] min-w-[450px]'>
    <h1 className='text-white text-2xl'>5-Day Forecast</h1>
    <div id="FinalDayData" class="FinalDayData flex justify-center items-center rounded-4xl">
    </div>
      </div>
    </>
  )
}

<script src="Forecast.js"></script>
export default ForeSection