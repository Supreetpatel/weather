import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id : 1,
            name: 'LONDON'
        },
        {
            id : 2,
            name: 'LONDON'
        },
        {
            id : 3,
            name: 'LONDON'
        },
        {
            id : 4,
            name: 'LONDON'
        },
    ]

    
  return (
    <div className="flex items-center justify-around my-6">
      <button className="text-lg font-medium hover:bg-gray-700/30 px-3 py-2 rounded-md transition ease-in">LONDON</button>
      <button>TOKYO</button>
      <button>NEW DELHI</button>
    </div>
  )
}

export default TopButtons
