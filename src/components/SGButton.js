import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { MyTheme } from '../lib/common'

/**
 * General component description in JSDoc format. Markdown is *supported*.
 * This is a simple `Button`.
 */
export default function SGButton({ color, variant, onClick, children }) {
  return (
    <MyTheme>
      <Button
        color={color}
        variant={variant}
        onClick={onClick}
      >
        { children }
      </Button>
    </MyTheme>
  )
}

SGButton.propTypes = {
  /**  Button text */
  children: PropTypes.string.isRequired,
  /**  Main color */
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  /** Button type - Check Material UI docs */
  variant: PropTypes.oneOf(['contained', 'outlined']),
  /** Function to be executed when button is clicked */
  onClick: PropTypes.func.isRequired,
}
