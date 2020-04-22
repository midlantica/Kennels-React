import React from 'react'

export default ({ animal, location, customer }) => (
  <section className='box animal'>
    <h6 className='animal__name'>{animal.name}</h6>
    <p>Breed: {animal.breed}</p>
    <p>Customer Name: {customer.name}</p>
    <p>Location Name: {location.name}</p>
  </section>
)
