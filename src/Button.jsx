import React from 'react'
import propsTypes from "prop-types"
import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props.name)
  return (
    <button>{props.name}</button>
  )
}
Button.defaultProps = {
    name:"Default"
}
Button.propTypesropTypes = {
    name:PropTypes.string
}
export default Button