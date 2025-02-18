import { useState } from 'react'
import { displayWeather } from './script';
import { getCoordinates } from './Forecast';
import { getWeather } from './Forecast';
import { displayForeCast2} from './Forecast';


function WindDirection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex flex-col justify-center items-center'>
    
    <div id="sectionThreeData" class="sectionThreeData">
            
            <div class="conditioning" id="conditioning">
                <div class="conSub" id="windDirection"></div>
                <div class="conSub" id="percipitation"></div>
                <div class="conSub" id="humidity"></div>
            </div>
    
            <div class="sunTimes" id="sunTimes">
                <div class="sunSub" id="sunrise"></div>
                <div class="sunSub" id="sunset"></div>
            </div>
            </div>
      </div>
    </>
  )
}

<script src="Forecast.js"></script>
export default ForeSection