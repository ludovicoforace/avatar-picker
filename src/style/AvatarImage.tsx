import styled from 'styled-components'

interface PropTypes {
  src: string, 
  alt: string
}

export default styled.img<PropTypes>`
position: absolute;
left: 0;
right: 0;
z-index: 3;
width: 100%;
height: 100%;
border-radius: 50%;
`
