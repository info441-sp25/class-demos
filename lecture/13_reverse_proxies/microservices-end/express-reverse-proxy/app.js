import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createProxyMiddleware } from 'http-proxy-middleware'
import request from 'request'

import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

app.get('/api/double', createProxyMiddleware({
    target: 'http://localhost:5000'
}))

const servers = ['http://localhost:6001', 'http://localhost:6002']
let cur_server_index = 0
app.get('/api/square', (req, res) => {
    try{
        cur_server_index = (cur_server_index + 1) % servers.length
        req
            .pipe(request({
                url: servers[cur_server_index] + req.originalUrl
            }))
            .pipe(res)
    }catch(err){
        console.log("error in /api/square:", err)
        res.status(500).json({status: "error", error: err})
    }
})

app.use('/*', createProxyMiddleware({
    target: 'http://localhost:4000',
    pathRewrite: (path, req) => req.baseUrl,
    changeOrigin: true
}))

export default app;
