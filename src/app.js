import express from 'express';
const app = express();
import bodyparser from 'body-parser';
import path from 'path';
import cors from 'cors';
import router from './routes';
import fileUpload from 'express-fileupload';

app.use(fileUpload())
app.use(express.static("files"))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
    origin: 'http://localhost:8000'
}))

app.use('/api', router);
const port = 8080;

app.listen(port, () => console.log(`Server is listening at port: ${port}`));
