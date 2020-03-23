import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList'
import { Col } from 'react-bootstrap/'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
    this.loadPokemon = this.loadPokemon.bind(this);
  }

  async loadPokemon(url) {
    // fetch returns a promise: https://www.npmjs.com/package/whatwg-fetch
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      this.setState({
        pokemon: json.game_indices
      });
      console.log(this.state)
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/1`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React jee!</h2>
        </div>
        <Col sm={8} md={10} smoffset={2} mdoffset={1}>
          <PokeList listOfPokemon={this.state.pokemon} />
        </Col>
      </div>
    );
  }
}
  

export default App;
