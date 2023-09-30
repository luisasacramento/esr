import React, {useState, useEffect} from 'react'

function App() {
  //Estado da lâmpada: true, ligada e false para desligada. 
  const[ligado, setLigado] = useState(false)

  //ciclo de vida quando o componene é montado (entramos no quarto)
  useEffect(() => {
    setLigado(true)
    return() => {
      //quando o componente é desmontado(saímos do quarto)
      setLigado(false)
    }
  }, []) //a array vazia indica que esse efeito ocorre apenas na montagem e desmontagem

  return(
    <div>
      <h1>A lâmpada está {ligado ? 'LIGADA' : 'DESLIGADA'}</h1>
      <button onClick={() => setLigado(!ligado)}>Trocar Estado da lâmpada</button>
    </div>
  )

}

export default App;