const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Importa o middleware cors
const complaintsRoute = require('./routes/complaints');

dotenv.config();

const app = express();

app.use(cors());  // Ativa o CORS para todas as rotas

// Caso fosse limitar o acesso do CORS
// const corsOptions = {
//     origin: 'http://127.0.0.1:5500',
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado ao MongoDB Atlas!"))
  .catch(err => console.error("Erro de conexão:", err));

app.use('/api/complaints', complaintsRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
