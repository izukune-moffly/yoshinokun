'use client'

import React, { FC, memo } from 'react'
import { Box } from '@mui/material'
import { Button } from '@/components'
import { COLORS } from '@/enums'

const SlideEditFooter: FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTop: `1px solid ${COLORS.MERCURY}`,
        backgroundColor: COLORS.WHITE,
        paddingRight: 4,
      }}
    >
      <Box>
        <Button width={96}>保存</Button>
      </Box>
      <Box>
        <Button width={96}>プレビュー</Button>
      </Box>
    </Box>
  )
}

export default memo(SlideEditFooter)
