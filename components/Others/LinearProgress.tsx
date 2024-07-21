import React, { FC, memo } from 'react'
import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  Box as MuiBox,
  Typography as MuiTypography,
} from '@mui/material'
import { COLORS } from '@/enums'

type Props = MuiLinearProgressProps

const LinearProgress: FC<Props> = (props) => {
  return (
    <MuiBox sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <MuiBox sx={{ width: '100%' }}>
        <MuiLinearProgress
          {...props}
          variant='determinate'
          color={props.value === 0 ? 'inherit' : 'success'}
          sx={{ height: 8, borderRadius: 5 }}
        />
      </MuiBox>
      <MuiBox sx={{ minWidth: 35 }}>
        <MuiTypography
          variant='body2'
          color={props.value === 100 ? COLORS.SALEM : COLORS.SHARK}
        >{`${Math.round(props.value ?? 0)}%`}</MuiTypography>
      </MuiBox>
    </MuiBox>
  )
}

export default memo(LinearProgress)
