import React, { FC, memo } from 'react'
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from '@mui/material'

type Props = {
  items: { value: string; text: string }[]
  value: string[] | string
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: string) => void
}

const ToggleButton: FC<Props> = (props) => {
  const { items, value, onChange } = props

  return (
    <MuiToggleButtonGroup
      color='primary'
      value={value}
      exclusive
      onChange={onChange}
      aria-label='Platform'
    >
      {items.map((item, index) => (
        <MuiToggleButton key={item.value + index} value={item.value}>
          {item.text}
        </MuiToggleButton>
      ))}
    </MuiToggleButtonGroup>
  )
}

export default memo(ToggleButton)
