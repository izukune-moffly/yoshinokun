import type { Meta, StoryObj } from '@storybook/react'

import BasicTable from './BasicTable'

const meta: Meta<typeof BasicTable> = {
  title: 'Tables/BasicTable',
  component: BasicTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicTable>

const headLabels = ['ID', 'ユーザー名', 'メールアドレス', '最終ログイン日', '']

const tableData = [
  {
    id: 'aaa',
    username: 'テスト太郎',
    email: 'test@gmail.com',
    lastLoginDate: '2023年10月3日',
  },
  {
    id: 'aaa',
    username: 'テスト太郎',
    email: 'test@gmail.com',
    lastLoginDate: '2023年10月3日',
  },
  {
    id: 'aaa',
    username: 'テスト太郎',
    email: 'test@gmail.com',
    lastLoginDate: '2023年10月3日',
  },
  {
    id: 'aaa',
    username: 'テスト太郎',
    email: 'test@gmail.com',
    lastLoginDate: '2023年10月3日',
  },
  {
    id: 'aaa',
    username: 'テスト太郎',
    email: 'test@gmail.com',
    lastLoginDate: '2023年10月3日',
  },
  {
    id: 'aaa',
    username: 'テスト太郎',
    email: 'test@gmail.com',
    lastLoginDate: '2023年10月3日',
  },
]

const progressHeadLabels = [
  'ID',
  '動画タイトル',
  '視聴ステータス',
  '最終閲覧日',
]

const progressTableData = [
  {
    id: '1',
    title: '動画1',
    status: 60,
    LastViewedDate: '2023年10月3日',
  },
  {
    id: '1',
    title: '動画2',
    status: 40,
    LastViewedDate: '2023年10月3日',
  },
  {
    id: '1',
    title: '動画3',
    status: 100,
    LastViewedDate: '2023年10月3日',
  },
  {
    id: '1',
    title: '動画4',
    status: 20,
    LastViewedDate: '2023年10月3日',
  },
  {
    id: '1',
    title: '動画5',
    status: 80,
    LastViewedDate: '2023年10月3日',
  },
]

export const Default: Story = {
  args: {
    tableName: 'test-table',
    headLabels,
    tableData,
  },
}

export const Progress: Story = {
  args: {
    tableName: 'test-table2',
    headLabels: progressHeadLabels,
    tableData: progressTableData,
  },
}
