import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      infoAlbum: [],
      music: [],
    };
  }

  componentDidMount() {
    this.getMusik();
  }

  getMusik = () => {
    const { match: { params } } = this.props;

    getMusics(params.id).then((response) => this.setState({
      infoAlbum: response[0],
      music: response.slice(1),
    }));
  };

  render() {
    const { infoAlbum, music } = this.state;
    return (
      <div>
        <div data-testid="page-album">
          <Header />

          <div>
            {/* {
              carregando ? <Loading /> : (

              )
            } */}
            <div>
              <div data-testid="artist-name">
                {infoAlbum.artistName}
              </div>
              <div data-testid="album-name">
                {infoAlbum.collectionName}
              </div>

              <div>
                {
                  music.map((som, index) => (
                    <div key={ index }>
                      <MusicCard
                        som={ som }
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
