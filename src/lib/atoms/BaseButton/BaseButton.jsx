import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { MyTheme } from '../../common'

export default function BaseButton({ color, variant, onClick, children }) {
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

BaseButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

BaseButton.defaultProps = {
  variant: "contained"
}
