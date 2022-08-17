import express = require('express');
import { CustomerController } from '../../controllers/customerController';
const app: express.Application = express();

app.use(express.json());


const port = process.env.PORT || 3000;

app.use('/customers', CustomerController);


app.listen(port, () => {
    console.log(`listen at: http://localhost:${port}`);
})