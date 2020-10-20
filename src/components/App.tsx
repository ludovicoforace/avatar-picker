import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import ThemeProvider from './ThemeProvider'
import AvatarPicker from './AvatarPicker'
import { theme } from '../style/themes'
import avatars from '../avatars.json'

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <AvatarPicker avatars={avatars} />
    </ThemeProvider>
  </ErrorBoundary>
)

export default App
