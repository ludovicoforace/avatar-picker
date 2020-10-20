import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '../interfaces'
import AvatarItem from './AvatarItem'
import AvatarPopover from './AvatarPopover'

interface PropTypes {
  avatars: Avatar[]
}

const Wrapper = styled.div`
max-width: 320px;
margin: 0 auto;
text-align: center;
`

const AvatarPicker = ({ avatars }: PropTypes) => {
  const [picking, setPicking] = useState(false)

  const onOutsidePopoverClick = () => {
    setPicking(false)
  }
  return (
    <Wrapper>
      <AvatarItem 
        onClick={() => {}}
        source="avatar1.png"
        label="Avatar 1"
        picking={false}
      />
      <AvatarPopover 
        picking={picking}
        onOutsidePopoverClick={onOutsidePopoverClick}
      />
    </Wrapper>
  )
}

export default AvatarPicker

