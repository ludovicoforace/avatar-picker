import styled from 'styled-components'

interface PropTypes {
  listItem?: boolean 
  picking?: boolean
  selected?: boolean
  loadingAvatar?: boolean
}

export default styled.div<PropTypes>`
position: absolute;
z-index: 4;
width: 100%;
height: 100%;
border-style: solid;
border-width: ${props => props.listItem
  ? '3px'
  : '1px'
};
${props => (
  (!props.listItem && props.picking) ||
  props.selected ||
  props.loadingAvatar)
    ? 'border-color: rgb(122, 161, 178)'
    : 'border-color: transparent'
};
${props => props.loadingAvatar && (`
  border-style: solid solid;
  border-right-color: transparent;
  animation: Rotate 1.5s;
  animation-iteration-count: infinite;
`)}
border-radius: 50%;

@keyframes Rotate {
 from { transform: rotate(0deg); }
 to { transform: rotate(360deg); }
}`
