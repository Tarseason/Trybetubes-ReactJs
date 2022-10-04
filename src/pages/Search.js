import React from 'react';
import Header from '../components/Header';

const num = 2;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      pesquisa: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      pesquisa: value,
    });
  };

  render() {
    const { pesquisa } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          data-testid="search-artist-input"
          type="text"
          placeholder="Pesquisa Mesmo"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ (pesquisa.length < num) }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
