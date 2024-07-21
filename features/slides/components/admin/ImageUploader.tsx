import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { COLORS } from '@/enums'
import { Typography } from '@mui/material'

const baseStyle = {
  display: 'grid',
  placeContent: 'center',
  borderWidth: 2,
  borderRadius: 4,
  backgroundColor: COLORS.WHITE,
  color: COLORS.SILVER_CHALICE,
  outline: 'none',
  height: '124px',
  width: '256px',
  border: `1px solid ${COLORS.MERCURY}`,
  cursor: 'pointer',
}

const acceptStyle = {
  borderColor: COLORS.MONGOOSE,
  borderStyle: 'dashed',
}

const rejectStyle = {
  borderColor: '#ff1744',
  borderStyle: 'dashed',
}

const ImageUploader = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone()

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject],
  )

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
  ))

  return (
    <section className='container'>
      <Typography fontSize={12} sx={{ marginBottom: 0.5 }}>
        画像アップロード
      </Typography>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography fontSize={14}>画像をアップロードする</Typography>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  )
}

export default ImageUploader
