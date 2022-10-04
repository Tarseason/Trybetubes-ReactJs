import React from 'react';
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
      </header>
    );
  }
}

export default Header;
