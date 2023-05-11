import { ReactNode } from 'react'

import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { Typography, Stack } from '@mui/material'

import { StyledLink, StyledSpan } from './styled'

export interface BreadcrumbOption {
  title: string
  linkTo?: string
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
      {options?.map(({ title, linkTo }) => {
        const Component = linkTo ? StyledLink : StyledSpan

        return (
          <Stack key={title} role='listitem' direction='row'>
            <Typography component={Component}>{title}</Typography>
            {linkTo && (separator ?? <NavigateNextIcon role='separator' />)}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default Breadcrumb
