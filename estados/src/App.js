import Pesquisa from './components/Search'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ECEE81;
`

function App() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
