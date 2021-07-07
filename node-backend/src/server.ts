import express from 'express';
import routes from './routes';
import cors from 'cors';
import session from 'express-session'

const app = express();
const PORT = 3035;

app.use(express.json());
app.use(session({secret: 'tivicbankservicesession2021'}))
app.use(cors());
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`);
});

