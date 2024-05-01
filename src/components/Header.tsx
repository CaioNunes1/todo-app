import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {

  const onClick=()=>{
    console.log('clicked')
  }

  return (
    <div>
      <header className='header'>
        <h1> {title}</h1>
        <Button color='green' text='Hello' onClick={onClick}/>
        
      </header>
    </div>
  )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
