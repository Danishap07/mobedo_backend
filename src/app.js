import express from 'express';
const app = express();
import bodyparser from 'body-parser';
import cors from 'cors';
import router from './routes';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(cors({
    // origin: 'http://mobedoconsulting.com/'|| 'http://localhost:8000'
// }))

app.use('/api', router);
const port = 8080;

app.listen(port, () => console.log(`Server is listening at port: ${port}`));
