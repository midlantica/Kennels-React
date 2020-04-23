import React from 'react'

export default ({ employee, location }) => (
  <section className='box employee'>
    <h6 className='employee__name'>{employee.name}</h6>
    <p className='fs-x-small'>{location.name}</p>
  </section>
)
