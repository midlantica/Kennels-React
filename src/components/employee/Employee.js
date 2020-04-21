import React from 'react'

export default (props) => (
  <section className='employee'>
    <h6 className='employee__name'>{props.employee.name}</h6>
    <p className='employee__kennel'>{props.employee.address}</p>
  </section>
)
