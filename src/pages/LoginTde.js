import { useState } from 'react';
import './LoginTde.css';
import Input from '../components/InputTde';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (passwordValue.length >= 6) {
      setPasswordError('');
    } else {
      setPasswordError('A senha deve conter pelo menos 6 caracteres');
    }
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setFormVisible(false);
  };

  return (
    <div className="container">
      {formVisible ? (
        <div className="formContainer">
          <Input
            label="E-mail"
            name="emailInput"
            value={email}
            onChange={onChangeEmail}
          />

          <Input
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            name="passwordInput"
            value={password}
            onChange={onChangePassword}
            errorMessage={passwordError}
          />

          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleCheckboxChange}
            />
            Mostrar senha
          </label>

          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
