import { useState } from 'react'

function SearchBar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mx-auto flex justify-center'>
        <input type="search" className="bg-gray-200 w-400 border-0 outline-0 m-4 mx-8"></input>
      </div>
    </>
  )
}

export default SearchBar