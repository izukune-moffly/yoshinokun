import React from 'react'
import { Typography, Box } from '@mui/material'
import { TextField, Stepper } from '@/components'
import { SlideEditorList, SlideEditFooter } from '@/features/slides/components'

const SlidesNewPage = () => {
  return (
    <div>
      <Box sx={{ marginBottom: 3 }}>
        <TextField label='スライドタイトル' width='100%' />
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Stepper />
        <SlideEditorList />
      </Box>
      <SlideEditFooter />
    </div>
  )
}

export default SlidesNewPage
