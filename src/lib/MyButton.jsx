import React from 'react'
import Button from '@material-ui/core/Button'

const MyButton = ({ color }) =>  {
  const _color = color ? color : "primary"

  return (
    <Button variant="contained" color={_color} >
      Hello Livia
    </Button>
  )
}

export default MyButton
