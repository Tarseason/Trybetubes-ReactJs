import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const num = 2;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      pesquisa: '',
      pesquisado: [],
      carregando: false,
      nameArt: false,
      artistaPes: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      pesquisa: value,
    });
  };

  handleClick = () => {
    const { pesquisa } = this.state;
    this.setState({
      carregando: true,
      nameArt: true,
      artistaPes: pesquisa,
    });

    searchAlbumsAPI(pesquisa).then((artista) => this.setState({
      pesquisado: artista,
      carregando: false,
      pesquisa: '',
    })).then(() => { this.setState({ pesquisa: '' }); });
  };

  render() {
    const { pesquisa, pesquisado, carregando, nameArt, artistaPes } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <input
          value={ pesquisa }
          name="pesquisa"
          data-testid="search-artist-input"
          type="text"
          placeholder="Pesquisa Mesmo"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ (pesquisa.length < num) }
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <div>
          {nameArt && (
            <div>
              <div>
                {pesquisado.length !== 0
                && <p>{`Resultado de álbuns de: ${artistaPes}`}</p>}
              </div>
              <div>
                {pesquisado.length === 0 && <p>Nenhum álbum foi encontrado</p>}
              </div>
            </div>
          )}
          {carregando ? <Loading /> : (
            pesquisado.map((item, index) => (
              <div key={ `${item.artistId}${index}` }>
                <img
                  src={ item.artworkUrl100 }
                  alt={ item.collectionName }
                />
                <p>{item.collectionName}</p>
                <p>{item.artistName}</p>
                <Link
                  to={ `/album/${item.collectionId}` }
                  data-testid={ `link-to-album-${item.collectionId}` }
                >
                  Detalhes

                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Search;
