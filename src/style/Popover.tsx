import styled from 'styled-components'

export default styled.div`
background-color: ${props => props.theme.popover.bg};
width: 280px;
margin: 0 auto;
padding: 0 4px 8px;
text-align: left;
border-radius: 2px;
box-shadow: ${props => props.theme.popover.shadow};
`
