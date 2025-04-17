// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/saveUser', (req, res) => {
  const userData = req.body;
  const csvRow = `${userData.firstName},${userData.lastName},${userData.email},${userData.phone},${userData.address},${userData.city},${userData.state},${userData.zip}\n`;

  fs.appendFile('users.csv', csvRow, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving user data');
    }
    res.send('User data saved successfully');
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});