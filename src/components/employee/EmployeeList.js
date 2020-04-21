import React, { useContext } from 'react'
import Employee from './Employee'
import { EmployeeContext } from './EmployeeProvider'

export default () => {
  const { employees } = useContext(EmployeeContext)

  return (
    <div className='box employees'>
      {employees.map((emp) => (
        <Employee key={emp.id} employee={emp} />
      ))}
    </div>
  )
}
