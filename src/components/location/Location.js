import React from 'react'

export default (props) => (
  <section className='box location'>
    <h6 className='location__name'>{props.location.name}</h6>
    <p className='location__address'>{props.location.address}</p>
  </section>
)
