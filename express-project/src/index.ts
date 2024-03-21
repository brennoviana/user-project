import { app } from './app/app';
import { config } from './config/envConfig';
import { connectToDatabase } from './config/dbConfig'

const PORT = config.port;
connectToDatabase();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
