import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'

// import { Button } from "~/atoms";
import Button from '../../../components/atoms/Button'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  it('should render without crashes', () => {
    render(<Button>btn label</Button>)

    const btn = screen.getByText(/btn label/i)
    expect(btn).toBeInTheDocument()
  })

  it('should render with custom props', () => {
    render(<Button variant='outlined'>btn label</Button>)
    expect(screen.getByText(/btn label/i)).toBeInTheDocument()
  })

  it('should click on button', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>btn label</Button>)

    const btn = screen.getByRole('button', { name: /btn label/i })
    fireEvent.click(btn)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>btn label</Button>)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
