import React, { useContext } from 'react'
import Animal from './Animal'
import { AnimalContext } from './AnimalProvider'

export default () => {
  const { animals } = useContext(AnimalContext)

  return (
    <div className='box animals'>
      {animals.map((animal) => (
        <Animal key={animal.id} animal={animal} />
      ))}
    </div>
  )
}
