import React from 'react'
// import './animal/Animal.css'
import AnimalList from './animal/AnimalList'
import { AnimalProvider } from './animal/AnimalProvider'
// import './customer/Customer.css'
import CustomerList from './customer/CustomerList'
import { CustomerProvider } from './customer/CustomerProvider'
// import './employee/Employee.css'
import EmployeeList from './employee/EmployeeList'
import { EmployeeProvider } from './employee/EmployeeProvider'
// import './Kennel.css'
// import './location/Location.css'
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
    <div>&nbsp;</div>

    <address>
      <p>Visit Us at the Nashville North Location</p>
      <p>500 Puppy Way</p>
    </address>
    <hr />

    <h3>Animals</h3>
    <AnimalProvider>
      <AnimalList />
    </AnimalProvider>

    <h3>Employees</h3>
    <EmployeeProvider>
      <EmployeeList />
    </EmployeeProvider>

    <h3>Locations</h3>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h3>Customers</h3>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  </>
)
