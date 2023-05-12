import { ReactNode } from 'react'

import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { Stack } from '@mui/material'

import { StyledSpan } from './styled'

export interface BreadcrumbOption {
  title: string
  Link?: ReactNode
}

export interface BreadcrumbProps {
  options: BreadcrumbOption[]
  separator?: ReactNode
}

const Breadcrumb = ({ options, separator }: BreadcrumbProps) => {
  return (
    <Stack
      spacing={1}
      direction='row'
      aria-label='breadcrumb'
      role='breadcrumb'
    >
      {options?.map(({ title, Link }) => {
        return (
          <Stack key={title} role='listitem' direction='row'>
            {Link ? <Link /> : <StyledSpan>{title}</StyledSpan>}

            {Link && (separator ?? <NavigateNextIcon role='separator' />)}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default Breadcrumb
