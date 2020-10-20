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

  const onCurrentAvatarClick = () => {
    setPicking(picking => !picking)
  }
  const onOutsidePopoverClick = () => {
    setPicking(false)
  }
  return (
    <Wrapper>
      <AvatarItem 
        onClick={onCurrentAvatarClick}
        source="avatar1.png"
        label="Avatar 1"
        picking={false}
      />
      <AvatarPopover 
        picking={picking}
        onOutsidePopoverClick={onOutsidePopoverClick}
      >
        {avatars.map(avatar => (
          <AvatarItem 
            key={avatar.id}
            source={avatar.src}
            label={avatar.label}
            onClick={() => {}}
            listItem
          />
        ))}
      </AvatarPopover>
    </Wrapper>
  )
}

export default AvatarPicker

