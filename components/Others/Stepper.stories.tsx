import type { Meta } from '@storybook/react'

import Stepper from './Stepper'
import { useState } from 'react'

const meta: Meta<typeof Stepper> = {
  title: 'Others/Stepper',
  component: Stepper,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return <Stepper />
}
