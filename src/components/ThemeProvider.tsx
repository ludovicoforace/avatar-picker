import React from 'react'
import { ThemeProvider as SThemeProvider } from 'styled-components'
import ResetCSS from '../style/ResetCSS'
import GlobalStyle from '../style/GlobalStyle'

interface PropTypes {
  theme: {}
  children: {} | []
}

const ThemeProvider = ({ theme, children }: PropTypes) => (
  <SThemeProvider theme={theme}>
    <ResetCSS />
    <GlobalStyle />
    {children}
  </SThemeProvider>
)

export default ThemeProvider
