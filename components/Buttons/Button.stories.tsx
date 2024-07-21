import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
  },
}
