import type { Meta, StoryObj } from '@storybook/react'

import RadioGroup from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const options = [
  {
    value: 1,
    label: '1. 普通',
  },
  {
    value: 2,
    label: '2. 当座',
  },
]

export const Default: Story = {
  args: {
    options,
  },
}
