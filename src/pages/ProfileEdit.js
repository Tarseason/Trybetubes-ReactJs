import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      carregando: false,
      name: '',
      email: '',
      image: '',
      description: '',
      disabled: true,
    };
  }

  componentDidMount() {
    this.getUserMesmo();
  }

  getUserMesmo = () => {
    getUser().then((response) => this.setState({
      carregando: false,
      name: response.name,
      email: response.email,
      image: response.image,
      description: response.description,
    }));
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.disabledMesmo());
  };

  disabledMesmo = () => {
    const { name, email, image, description } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const nameCheck = name.trim().length > 0;
    const emailCheck = emailRegex.test(email.trim());
    const imageCheck = image.trim().length > 0;
    const descripCheck = description.trim().length > 0;

    if (nameCheck && emailCheck && imageCheck && descripCheck) {
      this.setState({
        disabled: false,
      });
    }
  };

  atualizaMesmo = () => {
    const { name, email, image, description } = this.state;
    const { history } = this.props;

    updateUser({ name, email, image, description })
      .then(() => history.push('/profile'));
  };

  render() {
    const { carregando, name, email, image, description, disabled } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <p>Editar perfil</p>
        <div>
          {carregando ? <Loading /> : (

            <form>
              <input
                name="name"
                type="text"
                data-testid="edit-input-name"
                value={ name }
                onChange={ this.handleChange }
              />
              <input
                name="email"
                value={ email }
                type="email"
                data-testid="edit-input-email"
                onChange={ this.handleChange }
              />

              <input
                name="description"
                value={ description }
                type="text"
                data-testid="edit-input-description"
                onChange={ this.handleChange }
              />

              <input
                name="image"
                type="text"
                value={ image }
                data-testid="edit-input-image"
                onChange={ this.handleChange }
              />

              <button
                id="botao"
                name="botao"
                type="button"
                data-testid="edit-button-save"
                disabled={ disabled }
                onClick={ this.atualizaMesmo }
              >
                Salvar
              </button>
            </form>

          )}

        </div>
      </div>
    );
  }
}

export default ProfileEdit;
