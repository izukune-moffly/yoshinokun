import { forwardRef, memo } from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import { COLORS } from '@/enums'

type OtherProps = {
  errorMessage?: string
  width?: string | number
}

type Props = MuiTextFieldProps & OtherProps

const TextField = forwardRef<HTMLInputElement, Props>(
  function TextField(props, ref) {
    const { errorMessage, width = 300, ...textFieldProps } = props

    return (
      <MuiTextField
        {...textFieldProps}
        variant='outlined'
        ref={ref}
        sx={{
          width: width,
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff', // 入力エリアの背景色を変更
            '& fieldset': {
              borderColor: COLORS.MERCURY, // カスタムボーダーカラー
            },
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
      />
    )
  },
)

export default memo(TextField)
