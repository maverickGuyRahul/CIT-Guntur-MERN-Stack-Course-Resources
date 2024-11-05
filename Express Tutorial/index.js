import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/register', (req, res) => {
  const firstName = req.body.firstName;
  res.render('successPage', { userName: firstName });
});

app.listen(PORT, () => {
  console.log('The server is listening to requests on port ' + PORT);
});

// app.post('/login', (req, res) => {
//   res.send('Logged in Successfully!').sendStatus(200);
// });

// app.patch('/user', (req, res) => {
//   res.sendStatus(100);
// });

// app.put('/user', (req, res) => {
//   res.sendStatus(404);
// });

// app.delete('/user', (req, res) => {
//   res.send('Deleted the user').sendStatus(200);
// });
