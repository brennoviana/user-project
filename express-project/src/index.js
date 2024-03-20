import app from './app/app.js';
import config from './config/envConfig.js';
import connectToDatabase from './config/dbConfig.js'

const PORT = config.port;
connectToDatabase();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
