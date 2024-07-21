import type { Meta, StoryObj } from '@storybook/react'

import PageTitle from './PageTitle'

const meta: Meta<typeof PageTitle> = {
  title: 'Others/PageTitle',
  component: PageTitle,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageTitle>

export const Default: Story = {
  args: {
    title: '新規登録',
  },
}
