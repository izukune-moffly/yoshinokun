'use client'

import { cloneElement, FC, memo, ReactElement, useState } from 'react'
import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  SxProps,
  Theme,
} from '@mui/material'

type Props = {
  ariaLabelledby: string
  menuItems: {
    label: string
    icon?: JSX.Element
    color?: string
    clickEvent: () => void
  }[]
  children: ReactElement
  sx?: SxProps<Theme>
  itemFontSize?: number
}

const Menu: FC<Props> = (props) => {
  const { ariaLabelledby, menuItems, children, sx, itemFontSize } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isOpen = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const items = menuItems.map((item) => {
    const clickEvent = () => {
      item.clickEvent()
      handleClose()
    }

    return { ...item, clickEvent }
  })

  const newChildren = cloneElement(children, { onClick: handleOpen })

  return (
    <Box sx={sx}>
      {newChildren}
      <MuiMenu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        aria-labelledby={ariaLabelledby}
      >
        {items.map((item) => (
          <MuiMenuItem key={item.label} onClick={item.clickEvent}>
            {item.icon && (
              <ListItemIcon sx={{ color: item.color ?? '#1a1a1c' }}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText
              sx={{
                color: item.color ?? '#1a1a1c',
                '.MuiListItemText-primary': { fontSize: itemFontSize ?? 16 },
              }}
            >
              {item.label}
            </ListItemText>
          </MuiMenuItem>
        ))}
      </MuiMenu>
    </Box>
  )
}

export default memo(Menu)
