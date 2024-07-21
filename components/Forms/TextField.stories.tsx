import type { Meta, StoryObj } from '@storybook/react'

import TextField from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Forms/TextField',
  component: TextField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: '名前',
  },
}

export const NoLabel: Story = {
  args: {
    placeholder: '名前を入力してください',
  },
}

export const Small: Story = {
  args: {
    placeholder: '名前を入力してください',
    size: 'small',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'エラーです',
  },
}
