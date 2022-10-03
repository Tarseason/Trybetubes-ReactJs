import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <input
          type="text"
          placeholder="Indentificação de Usuario"
        />
      </div>
    );
  }
}

export default Login;
