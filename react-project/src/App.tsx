import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/data`)
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
