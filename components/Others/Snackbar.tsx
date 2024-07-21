import React, { FC, memo } from 'react'
import {
  Snackbar as MuiSnackbar,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
} from '@mui/material'
// import { useSnackbarStore } from '@/stores'

const Alert = React.forwardRef<HTMLDivElement, MuiAlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  },
)

type Props = {
  isOpen: boolean
}

const Snackbar: FC<Props> = (props) => {
  const { isOpen } = props

  // const snackbarStatus = useSnackbarStore((state) => state.snackbarStatus)

  // const closeSnackbar = useSnackbarStore((state) => state.closeSnackbar)

  return (
    <MuiSnackbar
      open={isOpen}
      autoHideDuration={6000}
      // onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        // onClose={closeSnackbar}
        // severity={snackbarStatus.severity}
        sx={{ width: '100%' }}
      >
        {/* {snackbarStatus.text} */}
      </Alert>
    </MuiSnackbar>
  )
}

export default memo(Snackbar)
