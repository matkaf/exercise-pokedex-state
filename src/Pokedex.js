import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super();
    this.selectPokemon = this.selectPokemon.bind(this);

    this.state = {
      index: 0,
      pokemons: pokemons,
    }
  }

  selectPokemon() {
    if (this.state.index < (this.state.pokemons).length - 1) {
     return this.setState((prevState, _props) => ({
        index: prevState.index + 1,
      }))
      // console.log(this.state.index);
    }
    return this.setState({
      index: 0,
    })
  }

    render() {
        return (
            <div className="pokedex">
                { <Pokemon key={pokemons[this.state.index].id} pokemon={pokemons[this.state.index]} /> }
                <button onClick={ this.selectPokemon }>Próximo </button>
            </div>
        );
    }
}

export default Pokedex;