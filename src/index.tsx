import React from 'react'
import { createRoot } from 'react-dom/client'
import Root from './routes'

const container = document.getElementById('root')
const root = createRoot(container as any)

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
