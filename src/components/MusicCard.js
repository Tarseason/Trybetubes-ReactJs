import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      carregando: false,
    };
  }

  componentDidMount() {
    this.pegaMesmo();
  }

  handleCheck = () => {
    const { checked } = this.state;
    const { som } = this.props;
    console.log(som);
    this.setState({
      carregando: true,
    });

    if (checked) {
      removeSong(som)
        .then(() => this.setState({ checked: false, carregando: false }));
    } else {
      addSong(som).then(() => this.setState({ checked: true, carregando: false }));
    }
  };

  pegaMesmo = () => {
    const { som } = this.props;

    getFavoriteSongs().then((same) => {
      if (same.some((el) => el.trackId === som.trackId)) {
        this.setState({
          checked: true,
        });
      } else {
        this.setState({
          checked: false,
        });
      }
    });
  };

  render() {
    const { som: { trackId, previewUrl, trackName } } = this.props;
    const { carregando, checked } = this.state;

    if (carregando) {
      return <Loading />;
    }
    return (
      <div>
        {trackName}
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="favorite">
          Favorita
          <input
            id="favorite"
            name="favorite"
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleCheck }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  som: PropTypes.shape({
    trackId: PropTypes.number,
    previewUrl: PropTypes.string,
    trackName: PropTypes.string,
  }).isRequired,
};

export default MusicCard;
