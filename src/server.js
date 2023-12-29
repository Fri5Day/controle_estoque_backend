import express from "express";
import { router } from "./router.js";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

app.listen(4000, () => console.log('Server listening on port 4000'));
