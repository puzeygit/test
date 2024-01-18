import React from 'react';
import { Container } from './UI.styled';
import { cards, generateId } from './constants';
import Card from './components/Card';


const App: React.FC = () => {

  return (
    <Container>
      {cards.map((card) => (
        <Card key={generateId()} {...card} />
      ))}
    </Container>
  );
}

export default App;
