import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sessions from 'express-session';

import WebAppAuthProvider from 'msal-node-wrapper';
import userRouter from './routes/users.js';

const authConfig = {
  auth: {
    clientId: 'Client ID or Application ID HERE',
    authority:
      'https://login.microsoftonline.com/Paste_the_Tenant_directory_ID_Here',
    clientSecret:
      "Client or Application secret here (NOT THE 'secret id', but the 'secret value')",
    redirectUri: '/redirect',
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: 3,
    },
  },
};

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.enable('trust proxy');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/build')));

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret:
      'this is some secret key I am making up 093u4oih54lkndso8y43hewrdskjf',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

const authProvider = await WebAppAuthProvider.WebAppAuthProvider.initialize(
  authConfig
);

app.use(authProvider.authenticate());

app.use('/users', userRouter);

app.get('/signin', (req, res, next) => {
  return req.authContext.login({
    postLoginRedirectUri: '/', // redirect here after login
  })(req, res, next);
});
app.get('/signout', (req, res, next) => {
  return req.authContext.logout({
    postLogoutRedirectUri: '/', // redirect here after logout
  })(req, res, next);
});

// Serve React Frontend
app.use(express.static(path.join(__dirname, 'public/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});

app.use(authProvider.interactionErrorHandler());

export default app;
