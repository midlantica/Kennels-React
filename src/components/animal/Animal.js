import React from 'react'

export default ({ animal }) => (
  <section className='animal'>
    <h5 className='animal__name'>{animal.name}</h5>
    <p className='animal__breed'>Breed: {animal.breed}</p>
    <p className='animal__breed'>Customer Id: {animal.customerId}</p>
    <p className='animal__breed'>Location Id: {animal.locationId}</p>
  </section>
)
