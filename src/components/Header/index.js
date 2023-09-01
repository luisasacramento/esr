import OpcoesMenu from '../OpcoesMenu'
import styled from 'styled-components'

const HeaderContainer = styled.header`
 background-color: blueviolet;
`

function Header(){
    return(
        <HeaderContainer> 
            <OpcoesMenu></OpcoesMenu>
        </HeaderContainer>
    );
}

export default Header