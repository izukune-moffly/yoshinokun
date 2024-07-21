import { Tab as MuiTab, Tabs as MuiTabs } from '@mui/material'
import { FC, memo } from 'react'

type Props = {
  ariaLabel: string
  tabLabels: string[]
  currentTabLabel: string
  handleChange?: (_: React.SyntheticEvent, newValue: string) => void
}

const Tabs: FC<Props> = (props) => {
  const { ariaLabel, tabLabels, currentTabLabel, handleChange } = props

  return (
    <MuiTabs
      value={currentTabLabel}
      onChange={handleChange}
      aria-label={ariaLabel}
    >
      {tabLabels.map((label, index) => (
        <MuiTab
          key={`${ariaLabel}${label}${index}`}
          value={label}
          label={label}
        />
      ))}
    </MuiTabs>
  )
}

export default memo(Tabs)
