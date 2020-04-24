import React, { useContext, useState, useEffect } from 'react'
import { AnimalContext } from './AnimalProvider'
import { LocationContext } from '../location/LocationProvider'
import { CustomerContext } from '../customer/CustomerProvider'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import AnimalForm from './AnimalForm'
import Animal from './Animal'

export default ({ searchTerms }) => {
  const { animals } = useContext(AnimalContext)
  const { locations } = useContext(LocationContext)
  const { customers } = useContext(CustomerContext)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [filteredAnimals, setFiltered] = useState([])

  useEffect(() => {
    if (searchTerms !== '') {
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      )
      setFiltered(subset)
    } else {
      setFiltered([])
    }
  }, [searchTerms, animals])

  return (
    <>
      <div className='flexRow'>
        <h4 className='marRH'>Animals</h4>
        <Button
          className='plusBtn'
          onClick={() => {
            // check if the user is authenticated
            const userId = localStorage.getItem('kennel_customer')
            if (userId) {
              // If the user is authenticated, show the animal form
              toggle()
            }
          }}
        >
          &#65291; {/* <<-- That's the unicode plus symbol +++ */}
        </Button>
      </div>

      <div className='gridSection animals'>
        {filteredAnimals.map((ani) => {
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

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Admit an Animal</ModalHeader>
        <ModalBody>
          <AnimalForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  )
}
