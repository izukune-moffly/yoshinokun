import type { Meta, StoryObj } from '@storybook/react'

import ComboBox from './ComboBox'

const meta: Meta<typeof ComboBox> = {
  title: 'Forms/ComboBox',
  component: ComboBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ComboBox>

export const Default: Story = {
  args: {
    id: 'property',
    options: [
      { id: 1, label: 'S-RESIDENCE ドーム前千代崎' },
      { id: 2, label: 'S-RESIDENCE 新宿御苑' },
      { id: 3, label: 'S-RESIDENCE 大阪同心' },
    ],
    noOptionsText: '該当する物件が存在しません',
  },
}
