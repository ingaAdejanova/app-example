import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomePage from '../src/pages/HomePage/HomePage'

describe('HomePage', () => {
  test('renders title and subtitle', () => {
    const { getByText } = render(<HomePage />)
    const titleElement = getByText('Welcome to My Website')
    const subtitleElement = getByText('This is a styled component example')
    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
  })
})
