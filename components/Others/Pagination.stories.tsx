import type { Meta } from '@storybook/react'

import Pagination from './Pagination'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
  title: 'Others/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  const [page, setPage] = useState<number>(1)

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    console.log(value)
    setPage(value)
  }

  return <Pagination page={page} onChange={handleChange} count={100} />
}
