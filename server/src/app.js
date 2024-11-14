const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const corsOptions = require('./config/cors.config');
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');

require('dotenv').config();

// Rutas

// Middlewares para cliente

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Uso de rutas
app.use('/auth', authRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () =>
      console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`)
    );
    console.log('Connected to database');
  } catch (error) {
    console.log('Connection error');
  }
};

startServer();
