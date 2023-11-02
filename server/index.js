const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");
const dbUrl = config.get("DB_URL");
const corsMiddleWare = require("./middleware/cors.middleware")

const authRouter = require('./routes/auth.routes')

app.use(corsMiddleWare)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = () => {
  try {
      mongoose.connect(`${dbUrl}`);
    app.listen(PORT, () => {
      console.log(`server is running http://localhost:${PORT}..`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
