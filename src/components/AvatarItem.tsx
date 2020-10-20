import React from 'react'
import styled from 'styled-components'

interface ImagePropTypes {
  src: string, 
  alt: string
}

const Image = styled.img<ImagePropTypes>`
position: absolute;
left: 0;
right: 0;
z-index: 3;
width: 100%;
height: 100%;
border-radius: 50%;
`

const Overlay = styled.div`
position: absolute;
z-index: 2;
width: 100%;
height: 100%;
background-color: rgb(122, 161, 178, 0.2);
border-radius: 50%;
`

interface BorderPropTypes {
  listItem?: boolean 
  picking?: boolean
  selected?: boolean
  loadingAvatar?: boolean
}

const Border = styled.div<BorderPropTypes>`
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

interface WrapperPropTypes {
  loadingAvatar?: boolean
  selected?: boolean
  listItem?: boolean
  onClick: () => void
}

const Wrapper = styled.div<WrapperPropTypes>`
position: relative;
z-index: 1;
display: inline-block;
width: 60px;
height: 60px;
margin: 4px;

${props => !props.loadingAvatar && (`
  &:hover {
    ${Border} {
      cursor: pointer;
      ${!props.selected && 'border-color: rgb(155, 160, 163)'};
    }
    ${(!props.selected && props.listItem) && (`
      ${Image} {
        z-index: 2;
      }
      ${Overlay} {
        z-index: 3;
      }
    `)}
  }`
)}`

interface PropTypes {
  selected?: boolean
  loadingAvatar?: boolean
  listItem?: boolean
  picking?: boolean
  source: string
  label: string
  onClick: () => void
}

const AvatarItem = ({
  selected,
  loadingAvatar,
  listItem,
  picking,
  source,
  label,
  onClick
}: PropTypes) => (
  <Wrapper
    onClick={onClick}
    selected={selected}
    loadingAvatar={loadingAvatar}
    listItem={listItem}
  >
    <Border
      selected={selected}
      loadingAvatar={loadingAvatar}
      listItem={listItem}
      picking={picking}
    />
    <Overlay />
    <Image alt={label} src={source} />
  </Wrapper>
)

export default AvatarItem
