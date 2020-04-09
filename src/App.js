import React from 'react';
import NavBar from './components/NavBar/NavBar'
import './App.css';
import Container from 'react-bootstrap/Container';
import InfoSlab from './components/InfoSlab/InfoSlab'
import Issues from './components/Issues/Issues';
function App() {
  return (
      <Container>
      <NavBar/>
      <InfoSlab/>
      <Issues/>
      </Container>
  );
}

export default App;
