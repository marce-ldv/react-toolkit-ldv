import { ReactNode, FC, ReactElement } from 'react'

import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/system'

import { NavigateNextIcon } from './styled'

export interface BreadcrumbProps extends BreadcrumbsProps {
  options: ReactElement[]
  separator?: ReactNode
  customSx?: SxProps
}

const Breadcrumb: FC<BreadcrumbProps> = ({ options, separator, customSx }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={separator ?? <NavigateNextIcon fontSize='small' />}
        sx={customSx}
        aria-label='breadcrumb'
        color='primary.main'
      >
        {options}
      </Breadcrumbs>
    </Stack>
  )
}

export default Breadcrumb
