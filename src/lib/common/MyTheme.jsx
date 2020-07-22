import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#043565',
    },
    secondary: {
      main: '#b98389',
    },
    // adding new color
    tertiary: {
      main: '#db2955'
    },
    text: {
      primary: '#44001a',
    }
  },
})

export default function MyTheme({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  )
}
