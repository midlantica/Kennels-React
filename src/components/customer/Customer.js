import React from 'react'

export default (props) => (
  <section className='customer'>
    <h5 className='customer__name'>{props.customer.name}</h5>
    <p className='customer__address'>{props.customer.address}</p>
  </section>
)
