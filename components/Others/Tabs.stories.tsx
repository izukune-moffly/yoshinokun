import type { Meta } from '@storybook/react'

import Tabs from './Tabs'
import { useState } from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'Others/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta

const labels = ['基本情報', '認証情報']

export const Default = () => {
  const [value, setValue] = useState(labels[0])

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Tabs
      ariaLabel='example'
      tabLabels={labels}
      currentTabLabel={value}
      handleChange={handleChange}
    />
  )
}
