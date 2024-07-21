import type { Meta, StoryObj } from '@storybook/react'

import IconButton from './IconButton'

import MenuIcon from '@mui/icons-material/Menu'

const meta: Meta<typeof IconButton> = {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Menu: Story = {
  args: {
    children: <MenuIcon />,
    color: 'primary',
  },
}
