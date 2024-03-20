import config from './envConfig.js';
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb://${config.mongoUsername}:${config.mongoPassword}@${config.mongoHost}:${config.mongoPort}/${config.mongoDatabase}?authSource=admin`);
        console.log('Conexão com o MongoDB estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
};

export default connectToDatabase;