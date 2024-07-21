import React from 'react'
import { SlideList } from '@/features/slides/components'
import { Typography, Box } from '@mui/material'
import Link from 'next/link'
import { COLORS, ROUTES } from '@/enums'

const SlidesPage = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component='h2'
          fontSize={24}
          fontWeight='bold'
          sx={{ marginBottom: 3 }}
        >
          スライド管理
        </Typography>
        <Link href={ROUTES.ADMIN_SLIDES_NEW}>
          <Typography sx={{ color: COLORS.MONGOOSE }}>新規追加</Typography>
        </Link>
      </Box>
      <SlideList />
    </div>
  )
}

export default SlidesPage
