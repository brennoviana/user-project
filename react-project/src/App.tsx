import { useState, useEffect } from 'react';
import { config } from './config/envConfig'

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch(`${config.backend_url}/api/data`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Erro ao buscar a mensagem:', error));
  }, []);

  return (
    <div>
      <h1>Mensagem do Servidor:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
