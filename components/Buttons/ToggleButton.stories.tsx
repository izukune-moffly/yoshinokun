import { useState } from 'react'
import type { Meta } from '@storybook/react'
import ToggleButton from './ToggleButton'

const meta: Meta<typeof ToggleButton> = {
  title: 'Buttons/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
}

export default meta

const items = [
  { value: '申請中', text: '申請中' },
  { value: 'キャンセル', text: 'キャンセル' },
]

export const Default = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    setValue(newValue)
  }

  return <ToggleButton items={items} value={value} onChange={handleChange} />
}

export const MultipleSelection = () => {
  const [values, setValues] = useState<string[]>([])

  const handleChange = (_: React.MouseEvent<HTMLElement>, newValue: string) => {
    setValues((currentValues) => {
      if (currentValues.includes(newValue)) {
        return currentValues.filter((value) => value !== newValue)
      }

      return [...currentValues, newValue]
    })
  }

  return <ToggleButton items={items} value={values} onChange={handleChange} />
}
