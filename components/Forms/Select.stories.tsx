import type { Meta } from '@storybook/react'
import Select from './Select'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta

const items = [
  { value: '普通', label: '普通' },
  { value: '定期', label: '定期' },
  { value: '当座', label: '当座' },
]

export const Default = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string)
  }

  return (
    <Select
      value={value}
      onChange={handleChange}
      items={items}
      id='account-type'
      size='small'
    />
  )
}
