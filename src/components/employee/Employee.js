import React from 'react'

export default ({ employee, location }) => (
  <section className='box employee'>
    <h6 className='employee__name'>{employee.name}</h6>
    <p>{location.name}</p>
  </section>
)
