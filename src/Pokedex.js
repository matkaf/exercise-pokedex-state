import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super();

    this.state = {
      index: 0,
      pokemons: pokemons,
    }
  }

  selectPokemon() {
    this.setState((prevState, _props) => ({
      index: prevState.index + 1,
    }))
  }

    render() {
        return (
            <div className="pokedex">
                { <Pokemon key={pokemons[0].id} pokemon={pokemons[0]} /> }
                <button onClick={}></button>
            </div>
        );
    }
}

export default Pokedex;