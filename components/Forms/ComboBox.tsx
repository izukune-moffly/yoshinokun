import { FC, memo } from 'react'
import {
  TextField as MuiTextField,
  Autocomplete as MuiAutocomplete,
  Paper as MuiPaper,
} from '@mui/material'

export type ComboBoxOption = { id: number | string; label: string }

const isOptionEqual = (
  option: ComboBoxOption | ComboBoxOption[],
  value: ComboBoxOption | ComboBoxOption[] | null,
): boolean => {
  if (!value) return false

  if (Array.isArray(option)) {
    if (Array.isArray(value)) {
      return option.some((opt) => value.some((val) => val.id === opt.id))
    } else {
      return option.some((opt) => opt.id === value.id)
    }
  } else {
    if (Array.isArray(value)) {
      return value.some((val) => val.id === option.id)
    } else {
      return value.id === option.id
    }
  }
}

type Props = {
  id: string
  options: ComboBoxOption[]
  noOptionsText: string
  label?: string
  value?: ComboBoxOption | ComboBoxOption[] | null
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    value: unknown | null,
  ) => void
  isMultiple?: boolean
  disabled?: boolean
}

const ComboBox: FC<Props> = (props) => {
  const {
    id,
    options,
    label,
    noOptionsText,
    value,
    onChange,
    isMultiple,
    disabled,
  } = props

  return (
    <MuiAutocomplete
      disablePortal
      multiple={isMultiple}
      id={`${id}-combo-box`}
      options={options}
      noOptionsText={noOptionsText}
      sx={{ width: isMultiple ? 650 : 300 }}
      isOptionEqualToValue={isOptionEqual}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          size={isMultiple ? 'medium' : 'small'}
          label={label}
        />
      )}
      disabled={disabled}
      value={value}
      onChange={onChange}
      PaperComponent={({ children, ...other }) => (
        <MuiPaper {...other} sx={{ maxHeight: '190px', overflow: 'auto' }}>
          {children}
        </MuiPaper>
      )}
    />
  )
}

export default memo(ComboBox)
