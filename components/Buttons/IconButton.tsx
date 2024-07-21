import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  Tooltip,
} from '@mui/material'
import { FC, memo } from 'react'

type Props = MuiIconButtonProps & { tooltipTitle?: string }

const IconButton: FC<Props> = (props) => {
  const { children, tooltipTitle, ...iconButtonProps } = props
  return (
    <Tooltip title={tooltipTitle}>
      <MuiIconButton {...iconButtonProps}>{children}</MuiIconButton>
    </Tooltip>
  )
}

export default memo(IconButton)
