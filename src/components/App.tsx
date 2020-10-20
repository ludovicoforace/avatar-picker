import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import ThemeProvider from './ThemeProvider'
import { theme } from '../style/themes'

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <h1>App</h1>
    </ThemeProvider>
  </ErrorBoundary>
)

export default App
