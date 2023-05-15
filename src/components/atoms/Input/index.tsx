import { InputHTMLAttributes, JSX } from 'react'

import { Box, Typography } from '@mui/material'
import MuiTextField from '@mui/material/TextField'

import { charsCounterStyles } from './styled'

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
  placeholder?: string
}

const MAX_CHARS_LENGTH = 200

const Input = ({
  maxLength = MAX_CHARS_LENGTH,
  value,
  error,
  variant,
  onChange,
  label = '',
  inputProps,
  type = 'text',
  placeholder = '',
  ...props
}: InputProps) => {
  const valueLength = String(value).length
  const isMaxLength = valueLength >= maxLength

  return (
    <Box>
      <MuiTextField
        onChange={onChange}
        value={value}
        error={error}
        variant={variant}
        InputProps={inputProps}
        inputProps={{ maxLength }}
        label={label}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isMaxLength && (
        <Typography
          sx={charsCounterStyles}
          paragraph
        >{`${valueLength} / ${maxLength}`}</Typography>
      )}
    </Box>
  )
}

export default Input
