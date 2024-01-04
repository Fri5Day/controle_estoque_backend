import express from "express";
import cors from "cors";
import router from "./routers/index.js";

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json());

app.listen(4000, () => console.log('Server listening on port 4000'));

app.use(router);
