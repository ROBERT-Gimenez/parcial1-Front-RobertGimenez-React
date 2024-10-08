import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      setError('El campo nombre debe tener al menos 3 caracteres');
      return;
    }

    if (phone.trim().length < 5) {
      setError('El campo telefono debe tener al menos 5 caracteres');
      return;
    }

    const regexName = /^[A-Za-z]+$/;
    if (!regexName.test(name)) {
      setError('El nombre debe contener solo letras');
      return;
    }

    const regexphone = /^[0-9]+$/;
    if (!regexphone.test(phone)) {
      setError('El telefono debe contener solo números');
      return;
    }

    setError('');
    onSubmit({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form className='form-content' onSubmit={handleSubmit}>
      <h2>Necesitas ayuda con react?</h2>
      <h3>Dejanos tus datos</h3>

      <div className='input-content'>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          />
        <input
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefono"
          />
        </div>

      <button className='btn-form' type="submit">Enviar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Form;