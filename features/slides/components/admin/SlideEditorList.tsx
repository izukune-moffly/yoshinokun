import React from 'react'
import SlideEditor from './SlideEditor'
import { Box } from '@mui/material'

const SlideEditorList = () => {
  return (
    <Box sx={{ width: '100%', marginTop: 1 }}>
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      <SlideEditor />
      {/* <SlideEditor /> */}
    </Box>
  )
}

export default SlideEditorList
