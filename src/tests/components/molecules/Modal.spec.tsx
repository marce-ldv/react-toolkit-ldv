import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Modal } from '../../../components/molecules'

describe('Modal', () => {
  test('renders Modal component', () => {
    render(
      <Modal open={true}>
        <h1>Modal</h1>
      </Modal>,
    )
    expect(screen.getByText('Modal')).toBeInTheDocument()
  })
})
