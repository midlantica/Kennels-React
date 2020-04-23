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
    <div className='searchResults br-BQ'>
      {/* <h6>Search results...</h6> */}
      <dl className='animals'>
        {filteredAnimals.map((animal) => (
          <dd key='{ animal.id }'>{animal.name}</dd>
        ))}
      </dl>
    </div>
  )
}
