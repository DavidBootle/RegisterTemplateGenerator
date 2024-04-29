import { useState } from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Register from './components/Register';

function App() {

  return (
    <Container fluid>
      <Register/>
    </Container>
  );
}

export default App;
