import {livros} from './dados'
import { Titulo } from '../titulo'
import Card from '../cards'
import imagemLivro from '../../imagens/livro2.jpg'
import styled from 'styled-components'


const SectionContainer = styled.section`
  background-color: #78D6C6;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const BlocoLivro = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;

`


function Lancamentos(){
    return(
        <SectionContainer>
        <Titulo 
           cor={'#000'}
           tamanhoFonte={'36px'}
           alinhamento={"center"}
           
        >Últimos Livros</Titulo>
        <BlocoLivro>
        {livros.map (livro => (
            <img alt='livro 1'src={livro.src}/>
    ))}
    </BlocoLivro>
    <Card 
      Titulo='Você também pode gostar'
      subtitulo=' A morte de Ivan Ilitch'
      descricao='Um livro de Tolstoy'
      img={imagemLivro}/>

    </SectionContainer>
    )
}

export default Lancamentos
