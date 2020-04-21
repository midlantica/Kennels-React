import React from 'react'

export default (props) => (
  <section className='customer'>
    <h6 className='customer__name'>{props.customer.name}</h6>
    <p className='customer__address'>{props.customer.address}</p>
  </section>
)
