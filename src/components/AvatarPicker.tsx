import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../interfaces'

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

    </Wrapper>
  )
}

export default AvatarPicker

