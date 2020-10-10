#!/usr/bin/env node
import http from 'http';
import * as dotenv from 'dotenv';
import chalk from 'chalk';
import App from '../index';
import findConfig from 'find-config';

dotenv.config({path: findConfig('.env') ?? ""});

const normalizePort = (val:any) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = (error:any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? `Pipe ${  port}`
    : `Port ${  port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind  } requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind  } is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  console.log(chalk.yellow('=========================================='));
  console.log(chalk.green(`Server listening on ${port}`));
  console.log(chalk.yellow('=========================================='));
  const addr:any = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${  addr}`
    : `port ${  addr.port}`;
};

const port = normalizePort(process.env.PORT);
App.set('port', port);
const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);