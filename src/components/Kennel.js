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
    <header>
      <h2>Nashville Kennels</h2>
      <p>
        <small>Loving care when you're not there.</small>
      </p>
    </header>

    <div className='dh-container'>
      <address>
        <p>Visit Us at the Nashville North Location</p>
        <p>500 Puppy Way</p>
      </address>
      <hr />

      <h4>Animals</h4>
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <AnimalList />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <EmployeeList />
        </LocationProvider>
      </EmployeeProvider>

      <h4>Locations</h4>
      <LocationProvider>
        <LocationList />
      </LocationProvider>

      <h4>Customers</h4>
      <CustomerProvider>
        <CustomerList />
      </CustomerProvider>
    </div>

    <footer></footer>
  </>
)
