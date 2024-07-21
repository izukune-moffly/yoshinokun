import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material'
import { FC, memo } from 'react'

type Props = MuiPaginationProps

const Pagination: FC<Props> = (props) => {
  return (
    <MuiPagination color='primary' showFirstButton showLastButton {...props} />
  )
}

export default memo(Pagination)
