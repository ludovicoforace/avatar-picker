import React from 'react'
import styled from 'styled-components'
import AvatarBorder from '../style/AvatarBorder'
import AvatarOverlay from '../style/AvatarOverlay'
import AvatarImage from '../style/AvatarImage'

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
    ${AvatarBorder} {
      cursor: pointer;
      ${!props.selected && 'border-color: rgb(155, 160, 163)'};
    }
    ${(!props.selected && props.listItem) && (`
      ${AvatarImage} {
        z-index: 2;
      }
      ${AvatarOverlay} {
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
    <AvatarBorder
      selected={selected}
      loadingAvatar={loadingAvatar}
      listItem={listItem}
      picking={picking}
    />
    <AvatarOverlay />
    <AvatarImage alt={label} src={source} />
  </Wrapper>
)

export default AvatarItem
