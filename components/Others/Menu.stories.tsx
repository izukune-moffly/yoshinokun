import type { Meta } from '@storybook/react'
import Menu from './Menu'
import IconButton from '../Buttons/IconButton'

import {
  EditOutlined as EditOutlinedIcon,
  DeleteOutline as DeleteOutlineIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material'

const menuItems = [
  {
    label: '編集する',
    icon: <EditOutlinedIcon />,
    color: '#1a1a1c',
    clickEvent: () => {},
  },
  {
    label: '削除する',
    icon: <DeleteOutlineIcon />,
    color: '#f94748',
    clickEvent: () => {},
  },
]

const meta: Meta<typeof Menu> = {
  title: 'Others/Menu',
  component: Menu,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <Menu menuItems={menuItems} ariaLabelledby='menu-button'>
      <IconButton id='menu-button'>
        <MoreVertIcon />
      </IconButton>
    </Menu>
  )
}
