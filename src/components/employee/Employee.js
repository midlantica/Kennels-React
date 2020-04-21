import React from 'react'

export default (props) => (
  <section className='employee'>
    <h5 className='employee__name'>{props.employee.name}</h5>
    <p className='employee__kennel'>{props.employee.address}</p>
  </section>
)
