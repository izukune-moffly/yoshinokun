import React, { FC, memo } from 'react'
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'

type Props = {
  title: string
} & MuiTypographyProps

const PageTitle: FC<Props> = (props) => {
  const { title, ...typographyProps } = props

  return (
    <MuiTypography
      component='h2'
      sx={{ fontWeight: 'bold', fontSize: 20 }}
      {...typographyProps}
    >
      {title}
    </MuiTypography>
  )
}

export default memo(PageTitle)
