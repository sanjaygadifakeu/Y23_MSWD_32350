import React from 'react'

const User = (props) => {
  return (
    <div>
      <h3> Name of the user:{props.name} logged in as {props.type}</h3>
    </div>
  )
}

export default User
