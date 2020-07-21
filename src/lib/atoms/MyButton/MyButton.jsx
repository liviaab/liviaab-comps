import React from 'react'
import Button from '@material-ui/core/Button'

export default function MyButton({ color, onClick }) {
  const _color = color ? color : "primary"

  return (
    <Button
      variant="contained"
      color={_color} onClick={onClick}
    >
      Click me!
    </Button>
  )
}
