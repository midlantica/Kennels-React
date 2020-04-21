import React from 'react'

export default (props) => (
  <section className='animal'>
    <h5 className='animal__name'>{props.animal.name}</h5>
    <p className='animal__breed'>Breed: {props.animal.breed}</p>
  </section>
)
