// src/__tests__/index.test.js

import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../pages/index' // Adjust the import based on your file structure

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Learn React/i)
  expect(linkElement).toBeInTheDocument()
})
