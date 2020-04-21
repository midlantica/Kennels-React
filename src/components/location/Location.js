import React from 'react'

export default (props) => (
  <section className='location'>
    <h5 className='location__name'>{props.location.name}</h5>
    <p className='location__address'>{props.location.address}</p>
  </section>
)
