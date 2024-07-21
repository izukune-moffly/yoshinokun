'use client'

import React, { FC, memo } from 'react'
import {
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  StepConnector as MuiStepConnector,
  StepIconProps as MuiStepIconProps,
  Box as MuiBox,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { COLORS } from '@/enums'

const stepLength = 10

const CustomStepConnector: FC = (props) => (
  <MuiStepConnector
    {...props}
    sx={{
      '& .MuiStepConnector-lineVertical': {
        marginLeft: 2.5,
        height: 160,
      },
    }}
  />
)

const CustomStepIcon: FC<MuiStepIconProps> = (props) => {
  const { icon } = props

  const isFirst = icon === 1

  const isLast = icon === stepLength

  return (
    <MuiBox
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: isFirst
          ? COLORS.DAWN
          : isLast
            ? COLORS.WHITE
            : COLORS.CHICAGO,
        color: isLast ? COLORS.MONGOOSE : COLORS.WHITE,
        border: isLast ? `1px solid ${COLORS.MONGOOSE}` : '',
        cursor: isLast ? 'pointer' : '',
      }}
    >
      {isFirst ? '表紙' : isLast ? <AddIcon /> : Number(icon) - 1}
    </MuiBox>
  )
}

const Stepper: FC = () => {
  return (
    <MuiStepper orientation='vertical' connector={<CustomStepConnector />}>
      {[...Array(stepLength)].map((_, index) => (
        <MuiStep key={index}>
          <MuiStepLabel StepIconComponent={CustomStepIcon} />
        </MuiStep>
      ))}
    </MuiStepper>
  )
}

export default memo(Stepper)
