import styled from 'styled-components'

const Opcao = styled.li`
 font-size: 20px;
 display:  flex;
 justify-content: center;
 align-items: center;
 text-align: center;
 cursor: pointer;
 min-width: 120px;

`

const Opcoes = styled.ul`
 display: flex;
`

const textoOpcoes = ['Link 1', 'link 2', 'link 3', ]

function OpcoesMenu(){
    return(
        <Opcoes>
            {textoOpcoes.map ((texto) => (
                <Opcao><p>{texto}</p></Opcao>

            ))}
        </Opcoes>

    );
}

export default OpcoesMenu