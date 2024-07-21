import type { Meta } from '@storybook/react'

import Snackbar from './Snackbar'
import { useState } from 'react'

const meta: Meta<typeof Snackbar> = {
  title: 'Others/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  const [open, setOpen] = useState(true)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      isOpen={open}
      // onClose={handleClose}
      // severity='success'
      // text='登録情報の更新に成功しました。'
    />
  )
}
