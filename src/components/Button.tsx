import React from 'react'
import PropTypes from 'prop-types'

interface ButtonProps{
  color:string;
  text:string;
  onClick:()=>void;
}

const Button: React.FC<ButtonProps> = ({color,text, onClick}) => {


  return (
    <div>
      <button onClick={onClick} className='btn' style={{background:color}}>{text}</button>
    </div>
  )
}



Button.prototype={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
