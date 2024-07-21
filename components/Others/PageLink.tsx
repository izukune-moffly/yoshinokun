import React, { FC, memo } from 'react'
import Link, { LinkProps } from 'next/link'
import { Box } from '@mui/material'
import { COLORS } from '@/enums'

type Props = LinkProps & { text: string }

const PageLink: FC<Props> = (props) => {
  const { text, ...linkProps } = props

  return (
    <Box
      component='span'
      sx={{
        color: COLORS.DODGER_BLUE,
        ':hover': { textDecoration: 'underline' },
      }}
    >
      <Link {...linkProps}>{text}</Link>
    </Box>
  )
}

export default memo(PageLink)
