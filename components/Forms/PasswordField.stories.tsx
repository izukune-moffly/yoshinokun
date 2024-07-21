import type { Meta, StoryObj } from '@storybook/react'

import PasswordField from './PasswordField'

const meta: Meta<typeof PasswordField> = {
  title: 'Forms/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PasswordField>

export const Default: Story = {
  args: {
    label: 'パスワード',
  },
}
