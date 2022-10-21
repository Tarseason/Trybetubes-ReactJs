import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      algo: [],
      carregando: false,
    };
  }

  componentDidMount() {
    this.getUserMesmo();
  }

  getUserMesmo = () => {
    getUser().then((response) => this.setState({ algo: response, carregando: false }));
  };

  render() {
    const { algo, carregando } = this.state;
    console.log(algo);
    return (
      <div data-testid="page-profile">
        <Header />
        {carregando ? <Loading /> : (
          <div>
            <div>
              <p>{algo.name}</p>
              <p>{algo.email}</p>
              <img
                src={ algo.image }
                alt={ algo.name }
                data-testid="profile-image"
              />
              <p>{algo.description}</p>
              <Link to="/profile/edit">Editar perfil</Link>
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default Profile;
