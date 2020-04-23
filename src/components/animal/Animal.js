import React from 'react'

export default ({ animal, location, customer }) => (
  <section className='box animal'>
    <h6 className='animal__name'>{animal.name}</h6>
    <p>Breed: {animal.breed}</p>
    <p>Customer: {customer.name}</p>
    <p>Location: {location.name}</p>
  </section>
)
