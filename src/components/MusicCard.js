import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { som, nomesom } = this.props;
    return (
      <div>
        <p>{nomesom}</p>
        <audio data-testid="audio-component" src={ som } controls>
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  som: PropTypes.string.isRequired,
  nomesom: PropTypes.string.isRequired,
};

export default MusicCard;
