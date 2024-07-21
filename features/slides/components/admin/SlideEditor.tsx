'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '@/enums'
import { IconButton, TextField, RadioGroup, Button } from '@/components'
import CloseIcon from '@mui/icons-material/Close'
import ImageUploader from './ImageUploader'
import MultilingualSettingModal from './MultilingualSettingModal'

const options = [
  {
    value: 'ホワイト',
    label: 'ホワイト',
  },
  {
    value: 'ブラック',
    label: 'ブラック',
  },
  {
    value: 'カバー',
    label: 'カバー',
  },
]

const SlideEditor = () => {
  const [isOpenMultilingualSettingModal, setIsOpenMultilingualSettingModal] =
    useState(false)

  const toggleMultilingualSettingModal = () =>
    setIsOpenMultilingualSettingModal((isOpen) => !isOpen)

  return (
    <Box
      sx={{
        position: 'relative',
        height: 216,
        backgroundColor: COLORS.WILD_SAND,
        borderRadius: 2,
        marginBottom: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          paddingTop: 2,
          paddingLeft: 4,
          paddingRight: 4,
          gap: 1.5,
        }}
      >
        <ImageUploader />
        <Box sx={{ width: '100%' }}>
          <Typography fontSize={12} sx={{ marginBottom: 0.5 }}>
            説明
          </Typography>
          <TextField multiline rows={4} width='100%' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 5,
          marginRight: 3,
          marginTop: 1,
        }}
      >
        <Box>
          <RadioGroup id='layout' options={options} />
        </Box>
        <Box>
          <Button
            width={88}
            size='small'
            onClick={toggleMultilingualSettingModal}
          >
            多言語設定
          </Button>
        </Box>
      </Box>
      <IconButton
        sx={{ position: 'absolute', right: 3, top: 3 }}
        color='primary'
        tooltipTitle='削除'
        size='small'
      >
        <CloseIcon fontSize='small' />
      </IconButton>

      <MultilingualSettingModal
        id='multilingual-setting-modal'
        isOpen={isOpenMultilingualSettingModal}
        toggleModal={toggleMultilingualSettingModal}
      />
    </Box>
  )
}

export default SlideEditor
