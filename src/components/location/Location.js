import React from 'react'

export default (props) => (
  <section className='location'>
    <h6 className='location__name'>{props.location.name}</h6>
    <p className='location__address'>{props.location.address}</p>
  </section>
)
