import React, { useRef } from 'react'
import './search.css'

export const SearchBar = ({ setTerms }) => {
  const { terms } = useRef()

  return (
    <fieldset>
      <div className='form-group marB0'>
        <label htmlFor='searchTerms'>Search:</label>
        <input
          onKeyUp={(e) => setTerms(e.target.value)}
          type='text'
          id='employeeNameSearchTerms'
          ref={terms}
          required
          autoFocus
          className='form-control br-B0 outline-none'
        />
      </div>
    </fieldset>
  )
}
