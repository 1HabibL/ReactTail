import { useState } from 'react'

function SearchBar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex justify-center'>
      <div className='relative'>
        <input type="search" 
        className="bg-gray-200/40  border-0 outline-0 m-4 mx-8 w-[35vw] min-w-[450px] rounded-md" 
        placeholder="Search..."
        />
        <span id="searchIcon" class="material-symbols-outlined absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-300" >search</span>
      </div>
      </div>
    </>
  )
}

export default SearchBar