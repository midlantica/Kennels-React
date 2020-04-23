import React from 'react'
// ANIMALS
import AnimalList from './animal/AnimalList'
import { AnimalProvider } from './animal/AnimalProvider'
// CUSTOMERS
import CustomerList from './customer/CustomerList'
import { CustomerProvider } from './customer/CustomerProvider'
// EMPLOYEES
import EmployeeList from './employee/EmployeeList'
import { EmployeeProvider } from './employee/EmployeeProvider'
// LOCATIONS
import LocationList from './location/LocationList'
import { LocationProvider } from './location/LocationProvider'

export default () => (
  <>
    <div className='dh-container'>
      <address>
        <p>Visit Us at the Nashville North Location</p>
        <p>500 Puppy Way</p>
      </address>
      <hr />

      <AnimalProvider>
        <CustomerProvider>
          <EmployeeProvider>
            <LocationProvider>
              <LocationList />
              <AnimalList />
              <CustomerList />
              <EmployeeList />
            </LocationProvider>
          </EmployeeProvider>
        </CustomerProvider>
      </AnimalProvider>
    </div>
  </>
)
