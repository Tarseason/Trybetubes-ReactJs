import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <input
          type="text"
          placeholder="Procurar"
        />
      </div>
    );
  }
}

export default Search;
