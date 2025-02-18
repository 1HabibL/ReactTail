import { useState } from 'react'
import { displayWeather } from './script';
import { getCoordinates } from './Forecast';
import { getWeather } from './Forecast';
import { displayForeCast2} from './Forecast';


function ForeSection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex flex-col justify-center items-center'>
    <div id="FinalDayData" class="FinalDayData flex justify-center items-center bg-gray-100 rounded-lg p-4"> </div>
      </div>
    </>
  )
}

<script src="Forecast.js"></script>
export default ForeSection