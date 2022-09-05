import './style.css';
import EyeOpen from '../../assets/open-eye.svg';
import EyeClosed from '../../assets/close-eye.svg';
import { useState } from 'react';


function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeIcon, setEyeIcon] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      return console.log("ERRO! O campo Email não pode estar vazio!");
    }
    if (!password) {
      return console.log("ERRO! O campo Senha não pode estar vazio!");
    }
    setEmail('');
    setPassword('');
    return console.log("SUCESSO! Você se logou no sistema!");
  }

  function handleEyeIcon() {
    setEyeIcon(!eyeIcon)
  }

  return (
    <div className='container'>
      <div className='form'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type={eyeIcon ? 'text' : 'password'}
            placeholder='Senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <img
            src={eyeIcon ? EyeOpen : EyeClosed}
            onClick={() => handleEyeIcon()}
            alt='show password'
          />

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
