'use client'

import React, { FC } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { TextField, Button, IconButton } from '@/components'
import { MULTILINGUAL_OPTIONS } from '../../enums/multilingual'

type Props = {
  id: string
  isOpen: boolean
  toggleModal: () => void
}

const MultilingualSettingModal: FC<Props> = (props) => {
  const { id, isOpen, toggleModal } = props

  return (
    <Dialog
      onClose={toggleModal}
      aria-labelledby={id}
      open={isOpen}
      maxWidth='xl'
      sx={{
        '& .MuiPaper-root': {
          width: 960,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold' }} id={id}>
        日本語(デフォルト)
      </DialogTitle>
      <Typography sx={{ margin: 2, marginTop: 0 }}>
        嶋原大夫とは
        京都の嶋原に現存する「太夫」は、妓女の最高位で、多くの芸事に秀でた存在です。かつては天皇にも謁見できる高い身分を持ち、公家が主なお客様でした。現在は4人のみが現存し、最も若手の葵太夫と司太夫が嶋原の文化を発信しています。
      </Typography>
      <IconButton
        aria-label='close'
        onClick={toggleModal}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        {MULTILINGUAL_OPTIONS.map(
          (lang) =>
            lang.value !== 'ja' && (
              <Box key={lang.value} sx={{ marginBottom: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography fontWeight='bold'>{lang.label}</Typography>
                  <Button width={80}>AI翻訳</Button>
                </Box>
                <TextField multiline width='100%' rows={4} />
              </Box>
            ),
        )}
      </DialogContent>
    </Dialog>
  )
}

export default MultilingualSettingModal
