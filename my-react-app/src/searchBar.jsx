import { useEffect, useState } from 'react'
import { fetchWeather } from './script'
import { getWeather } from './windDirection'
import { getWeather2 } from './Forecast'

function SearchBar() {
  const [searchTerm, setSearchTern] = useState("")

  useEffect(() => {
    const searchInput = document.getElementById("searchInput")
    const searchButton = document.getElementById("searchIcon")

    if (searchButton) {
      searchButton.addEventListener("click", () => {
        let city = searchInput.value.trim()
        
        fetchWeather(city);
        getWeather(city);
        getWeather2(city);
      });
    }
  return () => { 
    if(searchButton) {
      searchButton.removeEventListener("click", () => {});
    }
  };
}, []);
  
  return (
    <>
    <div className='mx-auto flex justify-center'>
      <div className='relative'>
        <input type="search" id="searchInput"
        className="bg-gray-200/40  border-0 outline-0 m-4 mx-8 w-[35vw] min-w-[450px] rounded-md" 
        placeholder="Search..."
        />
        <span id="searchIcon" className="material-symbols-outlined absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-300" >search</span>
      
      <div className='testdiv'></div>
      </div>
      </div>
    </>
  )
}

export default SearchBar;