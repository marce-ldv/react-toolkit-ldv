import { FC } from 'react'

import { MenuItem } from '@mui/material'
import MuiSelect, { SelectProps } from '@mui/material/Select'

export interface MuiSelectProps extends SelectProps {
  options: string[]
}

export const Select: FC<MuiSelectProps> = ({
  options,
  label = '',
  ...props
}) => {
  return (
    <MuiSelect {...props}>
      {options.map(option => {
        return (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        )
      })}
    </MuiSelect>
  )
}
