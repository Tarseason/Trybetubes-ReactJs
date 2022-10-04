import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      carregandoo: true,
    };
  }

  componentDidMount() {
    getUser().then((user) => this.setState({
      nome: user.name,
      carregandoo: false,
    }));
  }

  render() {
    const { nome, carregandoo } = this.state;
    return (
      <header data-testid="header-component">
        <div data-testid="header-user-name">
          { carregandoo ? <Loading /> : nome }
        </div>
        <Link data-testid="link-to-search" to="/search">Search</Link>
        <Link data-testid="link-to-favorites" to="/favorites">
          Favorites
        </Link>
        <Link data-testid="link-to-profile" to="/profile">Profile</Link>
      </header>
    );
  }
}

export default Header;
