import type { Meta, StoryObj } from '@storybook/react'

import LinearProgress from './LinearProgress'

const meta: Meta<typeof LinearProgress> = {
  title: 'Others/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LinearProgress>

export const Default: Story = {
  args: {
    value: 65,
  },
}

export const Complete: Story = {
  args: {
    value: 100,
  },
}
