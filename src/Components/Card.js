import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'

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
`

class Card extends React.Component {

    state = {
        nome: '',
        especie: '',
        origem: '',
        imagem: ''
    }

    componentDidMount(){
        function ramdomPerson(){
            const ramdomNumber = Math.floor(Math.random() * 826) + 1
            return ramdomNumber;
        }
        const ramdomPeson = ramdomPerson();
        const url = `https://rickandmortyapi.com/api/character/${ramdomPeson}`;
        axios.get(url).then(Response => {
            this.setState({nome: Response.data.name})
            this.setState({especie: Response.data.species})
            this.setState({origem: Response.data.origin.name})
            this.setState({imagem: Response.data.image})
        }).catch(error => {
            console.log("Deu erro aí meu nobre",error);
        });
    }
    render() {
        const nome = this.state.nome;
        const especie = this.state.especie;
        const origem = this.state.origem;
        const imagem = this.state.imagem;
        return (
        <StyledCard>
            <div className='Card'>
                <StyledImagem>
                    <div className='image'>
                    <img key={imagem} src={imagem} alt={`Imagem de ${nome}`}/>
                    </div>
                </StyledImagem>
                <h2 key={nome}>{nome}</h2>
                <p key={especie}>{especie}</p>
                <p key={origem}>{origem}</p>
            </div>
        </StyledCard>
        );
  }
}

export default Card;
