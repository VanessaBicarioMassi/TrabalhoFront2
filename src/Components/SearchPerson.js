import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";

const StyledCard = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 3%;
  padding: 7px;
  width: 90%; 
  border-radius: 3px;
  background-color: #D4EDD4;
`;
const StyledImagem = styled.div`
    width: 50px;
    display: flex;
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

class SearchPerson extends React.Component {
  state = {
    names: [],
    species: [],
    origens: [],
    imagens: [],
    procuraAtual: ''
  }

  procuraPersonagem = (event) => {
    this.setState({procuraAtual: event.target.value})
    const name = this.state.procuraAtual;
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

    axios.get(url)
      .then(Response => {
        const nameResult = Response.data.results.map(result => result.name);
        const origensResult = Response.data.results.map(result => result.origin.name);
        const speciesResult = Response.data.results.map(result => result.species);
        const imagensResult = Response.data.results.map(result => result.image);
        this.setState({ names: nameResult });
        this.setState({ origens: origensResult });
        this.setState({ species: speciesResult });
        this.setState({ imagens: imagensResult });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    this.setState({ procuraAtual: event.target.value });
  };

  render() {
    const { names, origens, imagens } = this.state;

    const mappingPersons = names.map((name, index) => (
        <StyledCard>
            <div key={index} className="Card">
                <StyledImagem>
                    <div className="imagem">
                    <img src={imagens[index]} alt={`Imagem de ${name}`} />
                    </div>
                </StyledImagem>
                <h2>{name}</h2>
                <p>{origens[index]}</p>
            </div>
      </StyledCard>
    ));

    return (
      <div>
        <p>Digite o nome do personagem procurado: </p>
        <input type="text" value={this.state.procuraAtual} onChange={this.procuraPersonagem} />
        <StyledCards>
            {mappingPersons}
        </StyledCards>
      </div>
    );
    
  }
}

export default SearchPerson;
