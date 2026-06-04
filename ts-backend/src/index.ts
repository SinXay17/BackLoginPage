import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { register, login } from './controllers/authController';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json()); 

app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});