import React from 'react'
import Button from '@material-ui/core/Button'
import { MyTheme } from '../../common'

export default function PrimaryButton({ onClick, children }) {
  return (
    <MyTheme>
      <Button
        color="primary"
        variant="outlined"
        onClick={onClick}
      >
        { children || "Click Me!" }
      </Button>
    </MyTheme>
  )
}
