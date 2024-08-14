
import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import Card from './components/Card';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setHasSubmitted(true);
  };

  return (
    <div className="App-content">
      <Form onSubmit={handleFormSubmit} />
      {hasSubmitted && formData && (
        <Card name={formData.name} phone={formData.phone} />
      )}
    </div>
  );
};

export default App
