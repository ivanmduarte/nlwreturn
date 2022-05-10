import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors()); //controle de segurança fornt que pode acessar a api
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
    
});