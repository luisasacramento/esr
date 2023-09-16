import Input from '../input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './books'


const SearchContainer = styled.section`
  /* background-color: #cfcfcc; */
  text-align: center;
  height: 270px;
  width: 100%;
`

const Tittle = styled.h1`

`

const SubTittle = styled.h2`

`
const Resultado = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

function Search(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    return(
        <SearchContainer>
            <Tittle>Já sabe por onde começar a leitura.</Tittle>
            <SubTittle>Encontre seu livro em nossa estante.</SubTittle>
            <Input

            placeholder='Busque sua proxima leitura'
            onBlur={evento=>{
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
             }}
           />

           {livrosPesquisados.map( livro => (
            <Resultado>
                <img src={livro.src}/>
                <p>{livro.nome}</p>        

            </Resultado>
           ))}
        </SearchContainer>

    )
}

export default Search