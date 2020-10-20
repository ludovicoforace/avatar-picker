import React, { useRef } from 'react'
import styled from 'styled-components'
import ArrowUp from '../style/ArrowUp'
import Popover from '../style/Popover'
import PopoverTitle from '../style/PopoverTitle'
import { useClickOutsideElement } from '../utils/hooks'

const Wrapper = styled.div<{picking: boolean}>`
animation: ${props => props.picking
    ? 'Fadein 0.3s'
    : 'Fadeout 0.1s'
};
visibility: ${props => props.picking 
  ? 'visible' 
  : 'hidden'
};
transition: visibility 0.1s linear;
text-align: center;

@keyframes Fadein { 
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes Fadeout { 
  0% { transform: scale(1); }
  100% { transform: scale(0); }
}
`

interface PropTypes {
  picking: boolean
  children?: {} | []
  onOutsidePopoverClick: () => void
}

const AvatarPopover = ({
  picking,
  children,
  onOutsidePopoverClick
}: PropTypes) => {
  const popoverRef = useRef(null)
  useClickOutsideElement(popoverRef, onOutsidePopoverClick)

  return (
    <Wrapper picking={picking}>
      <ArrowUp />
      <Popover ref={popoverRef}>
        <PopoverTitle>Choose your avatar</PopoverTitle>
        <ul>
          {children}
        </ul>
      </Popover>
    </Wrapper>
  )
}

export default AvatarPopover
