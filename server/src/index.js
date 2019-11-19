import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import 'babel-polyfill';
import { authentication } from './middleware';
import router from './router';
import config from './config';

const app = express();
const base = '/api';

app.server = http.createServer(app);
app.use(bodyParser.json());
app.use(base, authentication, router());
app.server.listen(config.port, () => console.log(`START AT: ${app.server.address().port}`));

// kill process after ctrl + c
process.on('SIGINT', () => process.exit());
