import styled from 'styled-components'

export default styled.div`
display: inline-block;
width: 0; 
height: 0; 
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 10px solid ${props => props.theme.popoverColor};
`
