import styled from 'styled-components'
import Lancamentos from './componentes/lancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F5FCCD;
`
function App() {
  return (
    <AppContainer>
      <Lancamentos/> 
    </AppContainer>
  );
}

export default App;
