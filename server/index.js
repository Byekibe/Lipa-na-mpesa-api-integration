import express from 'express';
import TokenRoute from './routes/token.js'
const port = 7000;
const app = express();

app.use("/token", TokenRoute);

app.get("/", (req, res) => {
    res.send("Daraja API use in progress")
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});