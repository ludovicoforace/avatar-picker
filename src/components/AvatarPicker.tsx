import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../interfaces'
import AvatarItem from './AvatarItem'

interface PropTypes {
  avatars: Avatar[]
}

const Wrapper = styled.div`
max-width: 320px;
margin: 0 auto;
text-align: center;
`

const AvatarPicker = ({ avatars }: PropTypes) => {
  return (
    <Wrapper>
      <AvatarItem 
        onClick={() => {}}
        source="avatar1.png"
        label="Avatar 1"
        picking={false}
      />
    </Wrapper>
  )
}

export default AvatarPicker

