import './App.css';
import React from 'react';
import Card from './Components/Card';
import styled from 'styled-components';
import SearchPersom from './Components/SearchPerson';

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
class App extends React.Component {

  verificaValorInput = (valorInput) =>{
    if(valorInput == ""){
      <Card/>
    } else{
      <SearchPersom/>
    }
  } 

  render() {
    const numCards = 20;
    const cards = [];
    for (let i = 1; i <= numCards; i++){
      cards.push(<Card key={i}/>);
    }

    return (
      <div>
        <h1>RICK & MORTY</h1>
        {this.verificaValorInput}
      </div>
    );
  }
}

export default App;

// Lembrar de colocar isso denovo
/*
<StyledCards>
{cards}
</StyledCards>
*/

//  <SearchePersom/>
        