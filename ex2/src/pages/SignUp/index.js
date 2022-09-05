import './style.css';
import Background from '../../assets/background.jpg';
import EyeOpen from '../../assets/open-eye.svg';
import EyeClosed from '../../assets/close-eye.svg';
import Cadastro from '../../assets/woman-success.png';
import { useState } from 'react';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [eyeIcon, setEyeIcon] = useState(false);
  const [sucess, setSucess] = useState(false);

  function handleEyeIcon() {
    setEyeIcon(!eyeIcon)
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError('Preencha todos os campos!');
      return;
    }

    setSucess(true);
    clearForm();
    return;
  }

  function handleChangeForm(event) {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  function clearForm() {
    setForm({ name: '', email: '', password: '' });
    setError('');
  }

  return (
    <div className='container'>
      {sucess ?
        <div className='success'>
          <img src={Cadastro} alt='sucesso' />
          <span>Cadastro efetuado com sucesso!</span>
        </div>
        :
        <main>
          <h1>Cadastre-se</h1>
          <input
            type='text'
            placeholder='Nome'
            name='name'
            value={form.name}
            onChange={(event) => handleChangeForm(event)}
          />

          <input
            type='text'
            placeholder='E-mail'
            name='email'
            value={form.email}
            onChange={(event) => handleChangeForm(event)}
            className='input-margin'
          />

          <input
            type={eyeIcon ? 'text' : 'password'}
            placeholder='Senha'
            name='password'
            value={form.password}
            onChange={(event) => handleChangeForm(event)}
          />

          <img
            src={eyeIcon ? EyeOpen : EyeClosed}
            onClick={() => handleEyeIcon()}
            className='btn-show'
            alt='show password'
          />

          {error && <span className='error'>{error}</span>}

          <button type='submit' onClick={handleSubmit} className='btn-cadastrar'>CADASTRAR</button>

          <button type='button' onClick={() => clearForm()} className='btn-cancelar'>CANCELAR</button>

          <span>Já tem cadastro? <a href='#'>Clique aqui!</a></span>
        </main>}


      <img src={Background} alt='cubos academy wallpaper' />
    </div>
  );
}

export default SignUp;
