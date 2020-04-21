import React from 'react'

export default ({ animal, location, customer }) => (
  <section className='animal'>
    <h6 className='animal__name'>{animal.name}</h6>
    <p className='animal__breed'>Breed: {animal.breed}</p>
    <p className='animal__breed'>Customer Name: {customer.name}</p>
    <p className='animal__breed'>Location Name: {location.name}</p>
  </section>
)
