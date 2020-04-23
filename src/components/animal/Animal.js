import React from 'react'

export default ({ animal, location, customer }) => (
  <section className='box animal flexColumn'>
    <div className='topFlexBox'>
      <h6 className='animal__name marB0'>{animal.name}</h6>
      <p className='fs-small'>{animal.breed}</p>
      <p className='fs-x-small'>Customer: {customer.name}</p>
      <p className='fs-x-small'>Location: {location.name}</p>
    </div>
    <button className='btn btn-primary btnXSmall marTH'>
      Make Appointment
    </button>
  </section>
)
