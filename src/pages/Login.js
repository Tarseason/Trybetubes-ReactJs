import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

const num = 2;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idUser: '',
      carreagando: false,
    };
  }

  handleChange = () => {
    const { history } = this.props;
    const { idUser } = this.state;
    this.setState({
      carreagando: true,
    });
    createUser({ name: idUser })
      .then(() => history.push('/search'));
  };

  handleChange2 = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({
      idUser: value,
    });
  };

  render() {
    const { idUser, carreagando } = this.state;
    return (
      <div data-testid="page-login">
        {carreagando ? <Loading /> : (
          <div>
            <input
              type="text"
              id="idUser"
              data-testid="login-name-input"
              placeholder="Identificação de Usuario"
              onChange={ this.handleChange2 }
            />

            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ (num >= idUser.length) }
              onClick={ this.handleChange }
            >
              Entrar
            </button>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
