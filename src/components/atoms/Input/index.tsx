import { FC, InputHTMLAttributes, JSX } from 'react'

import { Typography } from '@mui/material'
import MuiTextField from '@mui/material/TextField'

import { StyledCharsCounter } from './styled'

export interface InputProps {
  maxLength?: number
  inputProps?: { startAdornment?: JSX.Element }
  error?: boolean
  variant?: 'standard' | 'filled' | 'outlined'
  label?: string
  value?: string | number
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange']
  type?: string
  fullWidth?: boolean
  disabled?: boolean
}

const MAX_CHARS_LENGTH = 200

const Input: FC<InputProps> = ({
  maxLength = MAX_CHARS_LENGTH,
  value,
  error,
  variant,
  onChange,
  label = '',
  inputProps,
  type = 'text',
  ...props
}) => {
  const valueLength = String(value).length || 0

  return (
    <div>
      <MuiTextField
        onChange={onChange}
        value={value}
        error={error}
        variant={variant}
        InputProps={inputProps}
        inputProps={{ maxLength }}
        label={label}
        type={type}
        {...props}
      />
      {maxLength !== 200 && (
        <Typography
          sx={StyledCharsCounter}
          paragraph
        >{`${valueLength} / ${maxLength}`}</Typography>
      )}
    </div>
  )
}

export default Input
