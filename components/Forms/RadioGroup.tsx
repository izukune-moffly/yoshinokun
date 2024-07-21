import { FC, memo } from 'react'
import {
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel as MuiFormControlLabel,
  FormControl as MuiFormControl,
  FormLabel as MuiFormLabel,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material'

type Props = {
  id: string
  options: { value: string | number; label: string; isDisabled?: boolean }[]
  title?: string
} & MuiRadioGroupProps

const RadioGroup: FC<Props> = (props) => {
  const { id, title, options, ...radioGroupProps } = props

  return (
    <MuiFormControl>
      <MuiFormLabel id={`${id}-radio-group-label`}>{title}</MuiFormLabel>
      <MuiRadioGroup
        row
        aria-labelledby={`${id}-radio-group-label`}
        name={`${id}-radio-group-label`}
        {...radioGroupProps}
      >
        {options.map((option, index) => (
          <MuiFormControlLabel
            key={option.label + index}
            value={option.value}
            control={<MuiRadio size='small' />}
            label={option.label}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: 12 } }}
          />
        ))}
      </MuiRadioGroup>
    </MuiFormControl>
  )
}

export default memo(RadioGroup)
