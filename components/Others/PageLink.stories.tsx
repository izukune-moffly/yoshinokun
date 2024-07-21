import type { Meta, StoryObj } from '@storybook/react'

import PageLink from './PageLink'

const meta: Meta<typeof PageLink> = {
  title: 'Others/PageLink',
  component: PageLink,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageLink>

export const Default: Story = {
  args: {
    href: '',
    text: 'link',
  },
}
