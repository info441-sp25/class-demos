import express from 'express';
import enableWs from 'express-ws';

const app = express();
enableWs(app);

// track websocket connections
let socketCounter = 1;
let allSockets = {};

app.ws('/chatSocket', (ws, res) => {
  const mySocketNum = socketCounter;
  socketCounter++;
  console.log(`user ${mySocketNum} connected`);

  // add this ws to the global array tracking all websockets
  allSockets[mySocketNum] = {
    socket: ws,
    name: `User${mySocketNum}`,
  };

  ws.on('message', (chat) => {
    const message = JSON.parse(chat);

    if (message.action === 'updateName') {
      allSockets[mySocketNum].name = message.name;
    } else if (message.action === 'sendMessage') {
      const name = allSockets[mySocketNum].name;
      const curentMessage = message.message;

      for (const key in allSockets) {
        allSockets[key].socket.send(`${name}: ${curentMessage}`);
      }
    } else {
      throw new Error('Unknown action');
    }
  });

  ws.on('close', () => {
    console.log(`user ${mySocketNum} disconnected`);
    delete allSockets[mySocketNum];
  });
});

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html');
});

app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000');
});
