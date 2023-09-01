import Header from './components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
text-align: center;
font-size: 36px;
color: antiquewhite;
text-decoration: underline;
`


function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
      
    
  );
}

export default App;
