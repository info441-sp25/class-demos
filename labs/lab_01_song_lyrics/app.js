const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('', async (req, res) => {
  const files = await fs.readdir(__dirname + '/song_lyrics');

  const filesContent = await fs.readFile(
    __dirname + '/song_lyrics/' + files[3],
    'utf-8'
  );

  res.type('text').send(filesContent.toString());
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
