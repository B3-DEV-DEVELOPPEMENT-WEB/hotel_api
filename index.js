import express from "express";
import {router as hotelsRoutes} from "./routes/hotel.routes.js"
import {router as clientsRoutes} from "./routes/clients.routes.js"

const app = express();
const port = 3000;

app.use("/hotel", hotelsRoutes);
app.use("/clients", clientsRoutes);

app.listen(port, () => {
    console.log(`App started, listening to port ${port}`);
});