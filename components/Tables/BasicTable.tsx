import { FC, memo } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { COLORS } from '@/enums'
import PageLink from '../Others/PageLink'
import IconButton from '../Buttons/IconButton'
import { Delete as DeleteIcon } from '@mui/icons-material'
import React from 'react'

type Props = {
  tableName: string
  headLabels: string[]
  tableData: Record<string, string | number>[]
  hasProgress?: boolean
  href?: string
  onClick?: () => void
}

const BasicTable: FC<Props> = (props) => {
  const { tableName, headLabels, tableData, href, onClick } = props

  const formattedTableData = tableData.map((datum) => Object.values(datum))

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table aria-label={tableName}>
        <TableHead>
          <TableRow>
            {headLabels.map((label, index) => (
              <TableCell
                key={label + index}
                sx={{
                  color: COLORS.GRAY,
                  border: 'none',
                  fontSize: 12,
                  fontWeight: 'initial',
                  padding: 0,
                  paddingLeft: index === 0 ? 2 : 0,
                  paddingBottom: 1,
                }}
                align={index === headLabels.length - 1 ? 'right' : 'left'}
              >
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formattedTableData.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow>
                {row.map((item, index) => (
                  <TableCell
                    key={String(item) + index}
                    component='th'
                    scope='row'
                    sx={{
                      border: 'none',
                      padding: 0,
                    }}
                    align={index === headLabels.length - 1 ? 'right' : 'left'}
                  >
                    <Box
                      sx={{
                        borderTop: `1px solid ${COLORS.MONGOOSE}`,
                        borderBottom: `1px solid ${COLORS.MONGOOSE}`,
                        borderLeft:
                          index === 0 ? `1px solid ${COLORS.MONGOOSE}` : '',
                        height: 64,
                        borderRadius: index === 0 ? '8px 0 0 8px' : '',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: index === 0 ? 2 : 0,
                      }}
                    >
                      {href && headLabels[0] === 'ID' && index === 1 ? (
                        <PageLink
                          href={`${href}/${row[0]}`}
                          text={String(item)}
                        />
                      ) : (
                        item
                      )}
                    </Box>
                  </TableCell>
                ))}
                {onClick && (
                  <TableCell
                    component='th'
                    scope='row'
                    sx={{
                      border: 'none',
                      padding: 0,
                    }}
                    align='right'
                  >
                    <Box
                      sx={{
                        borderTop: `1px solid ${COLORS.MONGOOSE}`,
                        borderBottom: `1px solid ${COLORS.MONGOOSE}`,
                        borderRight: `1px solid ${COLORS.MONGOOSE}`,
                        height: 64,
                        borderRadius: '0 8px 8px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: 1,
                      }}
                    >
                      <IconButton
                        size='small'
                        color='primary'
                        tooltipTitle='削除'
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
              </TableRow>
              <TableRow
                sx={{
                  height: 16,
                }}
              ></TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default memo(BasicTable)
