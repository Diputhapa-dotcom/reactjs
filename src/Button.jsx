import React from 'react'
import propsTypes from 'prop-types'

const Button = (props) => {
  return (
    <button>{props.name}</button>
  )
}
Button.defaultProps = {
    name:"Default"
}
// Button.propstypes = {
//     name:propsTypes.string
// }


export default Button