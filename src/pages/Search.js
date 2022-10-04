import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          placeholder="Procurar"
        />
      </div>
    );
  }
}

export default Search;
