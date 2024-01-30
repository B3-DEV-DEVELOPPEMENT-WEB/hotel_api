import express from "express";
import {router as hotelsRoutes} from "./routes/hotels.routes.js"
import {router as clientsRoutes} from "./routes/clients.routes.js"

const app = express();
const port = 3000;

app.use("/hotels", hotelsRoutes);
app.use("/clients", clientsRoutes);

app.listen(port, () => {
    console.log(`App started, listening to port ${port}`);
});