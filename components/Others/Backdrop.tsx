import { FC, memo } from 'react'
import {
  Backdrop as MuiBackdrop,
  CircularProgress as MuiCircularProgress,
} from '@mui/material'

type Props = {
  isOpen: boolean
}

// NOTE: モーダルより上にするためzIndexを直接調整

const Backdrop: FC<Props> = (props) => {
  const { isOpen } = props

  return (
    <MuiBackdrop sx={{ color: '#fff', zIndex: 9999 }} open={isOpen}>
      <MuiCircularProgress color='inherit' />
    </MuiBackdrop>
  )
}

export default memo(Backdrop)
