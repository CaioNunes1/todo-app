import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({title, onAdd,showAdd}) {

  return (
    <div>
      <header className='header'>
        <h1> {title}</h1>
        <Button color={showAdd? 'red' :'green'} text={showAdd? 'Close':'Add'} onClick={onAdd}/>
        {/*qunado o button for clicado vai  chamar a função onAdd no App.tsk*/}
        
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
