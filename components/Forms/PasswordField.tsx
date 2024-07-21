'use client'

import { forwardRef, memo, useState } from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  IconButton,
  InputAdornment,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

type OtherProps = {
  errorMessage?: string
  width?: string | number
}

type Props = MuiTextFieldProps & OtherProps

const PasswordField = forwardRef<HTMLInputElement, Props>(
  function PasswordField(props, ref) {
    const { errorMessage, width = 300, ...textFieldProps } = props

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      event.preventDefault()
    }
    return (
      <MuiTextField
        {...textFieldProps}
        variant='outlined'
        type={showPassword ? 'text' : 'password'}
        ref={ref}
        sx={{
          width: width,
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff', // 入力エリアの背景色を変更
          },
          '& .MuiFormHelperText-root': {
            backgroundColor: 'transparent', // helperTextの背景色を透明に設定
          },
          '& textarea': {
            whiteSpace: 'pre-wrap', // 改行とスペースを保持しつつ、必要に応じて折り返し
            overflowWrap: 'break-word', // 長い単語がある場合に単語を折り返す
          },
        }}
        helperText={errorMessage}
        error={!!errorMessage}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    )
  },
)

export default memo(PasswordField)
