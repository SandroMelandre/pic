"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const customerController_1 = require("../../controllers/customerController");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
// app.use('/',(req, res)=>{
//     res.send('hello word');
// })
app.use('/customers', customerController_1.CustomerController);
app.listen(port, () => {
    console.log(`listen at: http://localhost:${port}`);
});
