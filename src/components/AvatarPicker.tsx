import React, { useState } from 'react'
import styled from 'styled-components'
import { getAvatar } from '../api'
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
  const [loadingAvatar, setLoadingAvatar] = useState<null | {}>(null)
  const [currentAvatar, setCurrentAvatar] = useState(avatars[0])

  const onCurrentAvatarClick = () => {
    setPicking(picking => !picking)
  }
  const onOutsidePopoverClick = () => {
    setPicking(false)
  }
  const onPickedAvatarClick = async (avatar: Avatar) => {
    setLoadingAvatar(avatar)
    const av: any = await getAvatar(avatar)
    setCurrentAvatar(av)
    setLoadingAvatar(null)
    setPicking(false)
  }

  return (
    <Wrapper>
      <AvatarItem 
        onClick={onCurrentAvatarClick}
        source={currentAvatar.src}
        label={currentAvatar.label}
        picking={picking}
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
            selected={avatar === currentAvatar}
            loadingAvatar={avatar === loadingAvatar}
            listItem
            onClick={onPickedAvatarClick.bind(null, avatar)}
          />
        ))}
      </AvatarPopover>
    </Wrapper>
  )
}

export default AvatarPicker

