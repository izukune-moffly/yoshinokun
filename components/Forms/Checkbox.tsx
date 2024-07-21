import React, { FC, memo } from 'react'
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'

type Props = MuiCheckboxProps

const Checkbox: FC<Props> = (props) => <MuiCheckbox {...props} />

export default memo(Checkbox)
