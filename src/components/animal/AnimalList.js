import React, { useContext } from 'react'
import { CustomerContext } from '../customer/CustomerProvider'
import { LocationContext } from '../location/LocationProvider'
import Animal from './Animal'
import { AnimalContext } from './AnimalProvider'

export default () => {
  const { animals } = useContext(AnimalContext)
  const { locations } = useContext(LocationContext)
  const { customers } = useContext(CustomerContext)

  return (
    <div className='gridSection animals'>
      {animals.map((ani) => {
        const matchingLocation = locations.find(
          (loc) => loc.id === ani.locationId
        )
        const matchingCustomer = customers.find(
          (customer) => customer.id === ani.customerId
        )

        return (
          <Animal
            key={ani.id}
            animal={ani}
            customer={matchingCustomer}
            location={matchingLocation}
          />
        )
      })}
    </div>
  )
}
