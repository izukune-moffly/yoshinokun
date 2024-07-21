import { FC, memo } from 'react'
import {
  Select as MuiSelect,
  FormControl as MuiFormControl,
  MenuItem as MuiMenuItem,
  SelectProps as MuiSelectProps,
} from '@mui/material'

type OtherProps = {
  items: { value: string | number; label: string }[]
}

type Props = MuiSelectProps & OtherProps

const Select: FC<Props> = (props) => {
  const { id, items, value, onChange, size, ...muiSelectProps } = props

  return (
    <MuiFormControl size={size} sx={{ width: 300 }}>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={onChange}
        {...muiSelectProps}
      >
        {items.map((item, index) => (
          <MuiMenuItem key={index + item.label} value={item.value}>
            {item.label}
          </MuiMenuItem>
        ))}
      </MuiSelect>
    </MuiFormControl>
  )
}

export default memo(Select)
