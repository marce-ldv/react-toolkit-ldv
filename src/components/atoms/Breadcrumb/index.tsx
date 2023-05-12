import { Component, ReactNode } from 'react'

import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { Stack } from '@mui/material'

import { StyledLink, StyledSpan } from './styled'

export interface BreadcrumbOption {
  title: string
  linkTo?: string
}

export interface BreadcrumbProps {
  options: BreadcrumbOption[]
  separator?: ReactNode
  Link?: Component | ReactNode
}

const Breadcrumb = ({ options, separator, Link }: BreadcrumbProps) => {
  return (
    <Stack
      spacing={1}
      direction='row'
      aria-label='breadcrumb'
      role='breadcrumb'
    >
      {options?.map(({ title, linkTo }) => {
        const TpStyled = linkTo ? StyledLink : StyledSpan
        const LinkWrapper = Link ?? StyledLink

        return (
          <Stack key={title} role='listitem' direction='row'>
            {linkTo ? (
              <LinkWrapper>
                <TpStyled>{title}</TpStyled>
              </LinkWrapper>
            ) : (
              <TpStyled>{title}</TpStyled>
            )}

            {linkTo && (separator ?? <NavigateNextIcon role='separator' />)}
          </Stack>
        )
      })}
    </Stack>
  )
}

export default Breadcrumb
