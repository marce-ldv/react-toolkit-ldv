import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { toHaveNoViolations } from 'jest-axe'
import { describe, expect, it } from 'vitest'

// import { Input } from "~/Input";
import Input from '../../../components/atoms/Input'

expect.extend(toHaveNoViolations)

describe('Input', () => {
  it('should render without crashes', () => {
    render(<Input />)
  })

  it('should render with label', () => {
    render(<Input label='Username' />)
    const label = screen.getByRole('textbox', { name: 'Username' })

    expect(label).toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<Input placeholder='placeholder' />)
    const placeholder = screen.getByPlaceholderText('placeholder')
    expect(placeholder).toBeInTheDocument()
  })

  // it('the user should type in the input', () => {
  //   const onChange = vi.fn()
  //   render(<Input onChange={onChange} />)

  //   const input = screen.getByRole('textbox')

  //   expect(input).toBeInTheDocument()
  //   expect(input).toHaveValue('')

  //   userEvent.type(input, 'hello')

  //   expect(input).toHaveValue('hello')
  // })

  it('should render with disabled', () => {
    render(<Input disabled />)
    const disabled = screen.getByRole('textbox')

    expect(disabled).toBeDisabled()
  })

  // it('should be accessible', async () => {
  //   const { container } = render(<Input />)
  //   const results = await axe(container)

  //   expect(results).toHaveNoViolations()
  // })
})
