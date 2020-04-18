import express from 'express';
import { HelloType } from './routes'

const app = express();

app.get('/', HelloType)

app.listen(3333);