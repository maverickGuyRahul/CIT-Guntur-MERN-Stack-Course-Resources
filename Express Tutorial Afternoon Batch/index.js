import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 2000;

app.get('/', (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log('The app is listening for requests on port : ' + PORT);
});

// app.get('/about', (req, res) => {
//   res.send('This is CIT Guntur About Us Page');
// });

// app.get('/about', (req, res) => {
//   res.sendStatus(200);
// });

// app.post('/login', (req, res) => {
//   res.sendStatus(200);
// });

// app.patch('/user', (req, res) => {
//   res.sendStatus(100);
// });

// app.put('/user', (req, res) => {
//   res.sendStatus(100);
// });

// app.delete('/user', (req, res) => {
//   res.sendStatus(204);
// });
