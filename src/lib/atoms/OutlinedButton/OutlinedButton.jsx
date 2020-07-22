import React from 'react'
import Button from '@material-ui/core/Button'
import { MyTheme } from '../../common'

export default function OutlinedButton({ onClick, children }) {
  return (
    <MyTheme>
      <Button
        color="primary"
        variant="contained"
        onClick={onClick}
      >
        { children|| "Click Me!" }
      </Button>
    </MyTheme>
  )
}
