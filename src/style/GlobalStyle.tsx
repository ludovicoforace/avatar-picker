import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{theme: { textColor: string, fontFamily: string }}>`
body {
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontFamily};
}
`

export default GlobalStyle
