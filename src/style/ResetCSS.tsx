import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
body {
  margin: 0;
  line-height: 0;
}
html {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
@-ms-viewport {
  width: device-width;
}
*:focus {
  outline: none;
}
`

export default ResetCSS
