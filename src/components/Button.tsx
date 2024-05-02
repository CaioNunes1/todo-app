import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color,text, onClick}) => {


  return (
    <div>
      <button onClick={onClick} className='btn' style={{background:color}}>{text}</button>
    </div>
  )
}

Button.defaltProps={
    color:'green',
}

Button.prototype={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
