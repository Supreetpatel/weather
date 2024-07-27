import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id : 1,
            name: 'London'
        },
        {
            id : 2,
            name: 'Toronto'
        },
        {
            id : 3,
            name: 'Paris'
        },
        {
            id : 4,
            name: 'Tokyo'
        },
        {
          id : 5,
          name: 'Sydney'
      },
    ]

    
  return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
      <button className="text-lg font-medium hover:bg-gray-700/30 px-3 py-2 rounded-md transition ease-in">{city.name}</button>
    ))}
    </div>
  )
}

export default TopButtons
