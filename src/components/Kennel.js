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

      <h4>Employees</h4>
      <EmployeeProvider>
        <EmployeeList />
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
