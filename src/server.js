import express, { json } from "express";

const server = express();

server.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});