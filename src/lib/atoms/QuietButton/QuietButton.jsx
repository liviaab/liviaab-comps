import React from 'react'
import Button from '@material-ui/core/Button'
import { MyTheme } from '../../common'

export default function QuietButton({ onClick, children }) {
  return (
    <MyTheme>
      <Button
        color="primary"
        onClick={onClick}
      >
        { children|| "Click Me!" }
      </Button>
    </MyTheme>
  )
}
