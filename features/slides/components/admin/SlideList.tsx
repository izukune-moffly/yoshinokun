import React, { FC, memo } from 'react'
import { BasicTable } from '@/components'
import { SLIDES_MOCKS } from '../../mocks'

const HEAD_LABELS = ['ID', 'スライドタイトル', '最終更新日', '']

const SlideList: FC = () => {
  return (
    <BasicTable
      tableName='slide-list'
      headLabels={HEAD_LABELS}
      tableData={SLIDES_MOCKS}
      onClick={() => {}}
    />
  )
}

export default memo(SlideList)
