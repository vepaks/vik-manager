const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");
const dbUrl = config.get("DB_URL");
const corsMiddleWare = require("./middleware/cors.middleware")

const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')

app.use(corsMiddleWare)
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

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
