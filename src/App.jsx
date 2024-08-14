
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

  const handleReset = () => {
    setFormData(null);
    setHasSubmitted(false);
  };

  return (
    <div className="App-content">
      {!hasSubmitted && <Form onSubmit={handleFormSubmit} />}
      {hasSubmitted && formData && (
        <Card name={formData.name} phone={formData.phone}  onReset={handleReset} />
      )}
    </div>
  );
};

export default App
