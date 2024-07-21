import { FC, memo } from 'react'
import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from '@mui/material'

type OtherProps = {
  width?: number | string
}

type Props = MuiButtonProps & OtherProps

const Button: FC<Props> = (props) => {
  const { width = 300, children, ...buttonProps } = props

  return (
    <MuiButton sx={{ width: width }} {...buttonProps}>
      {children}
    </MuiButton>
  )
}

export default memo(Button)
