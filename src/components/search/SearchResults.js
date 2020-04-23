import React, { useState, useContext, useEffect } from 'react'
import { AnimalContext } from '../animal/AnimalProvider'

export const SearchResults = ({ searchTerms }) => {
  const { animals } = useContext(AnimalContext)
  const [filteredAnimals, setFiltered] = useState([])

  useEffect(() => {
    if (searchTerms !== '') {
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      )
      setFiltered(subset)
    } else {
      setFiltered([])
    }
  }, [searchTerms, animals])

  return (
    <div className='searchResults marB1'>
      <h6>Search results...</h6>
      <div className='animals'>
        {filteredAnimals.map((animal) => (
          <div key='{ animal.id }'>{animal.name}</div>
        ))}
      </div>
    </div>
  )
}
