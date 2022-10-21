import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      // carregando: true,
      favorites: [],
    };
  }

  componentDidMount() {
    getFavoriteSongs().then((el) => this.setState({ favorites: el }));
  }

  disFave = (algo) => {
    const { favorites } = this.state;
    this.setState({
      carregando: true,
    });
    const mesmo = favorites.filter((el) => el.trackId !== algo.trackId);
    this.setState({
      favorites: mesmo,
    });
    removeSong(algo).then(() => this.setState({ carregando: false }));
  };

  render() {
    const { favorites, carregando } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        Favorites
        {carregando && <Loading />}
        {!carregando && (
          <div>
            {
              favorites.map((musi, index) => (
                <div key={ `${index}22` }>
                  <div>
                    <img
                      src={ musi.artworkUrl60 }
                      alt={ musi.trackName }
                    />
                  </div>
                  <MusicCard
                    disFave={ () => this.disFave(musi) }
                    som={ musi }
                  />
                </div>
              ))
            }
          </div>
        )}

      </div>
    );
  }
}

export default Favorites;
