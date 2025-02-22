import { useState } from 'react'
import { getCoordinates } from './windDirection';
import { getWeather} from './windDirection';
import { displaySection3} from './windDirection';



function WindDirection() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex flex-col items-center my-[10px]'>
    
    <div id="sectionThreeData" className="sectionThreeData flex bg-blue-900/50 w-[35vw] min-w-[450px] justify-between rounded-4xl">
            
            <div className="conditioning ml-8 my-4" id="conditioning">
              <h1 className='text-white text-2xl'>Wind, Percipitation and Humidity</h1>
                <div className="conSub  bg-blue-900/65 my-4 h-10 w-40 flex items-center justify-center text-white rounded-4xl" id="windDirection"></div>
                <div class="conSub  bg-blue-900/65 my-4 h-10 w-40 flex items-center justify-center text-white rounded-4xl" id="percipitation"></div>
                <div class="conSub  bg-blue-900/65 my-4 h-10 w-40 flex items-center justify-center text-white rounded-4xl" id="humidity"></div>
            </div>
    
            <div className="sunTimes mr-8 my-4 " id="sunTimes">
            <h1 className='text-white text-2xl'>Sunrise and Sunset</h1>
                <div className="sunSub bg-blue-900/65 my-4 h-10 w-40 flex items-center justify-center text-white rounded-4xl" id="sunrise"></div>
                <div className="sunSub bg-blue-900/65 my-4 h-10 w-40 flex items-center justify-center text-white rounded-4xl" id="sunset"></div>
            </div>
            </div>
      </div>
    </>
  )
}

<script src="windDirection.js"></script>
export default WindDirection