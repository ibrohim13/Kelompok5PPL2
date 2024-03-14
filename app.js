const express = require('express');
const app = express();
const siswaRouter = require('./siswa');

app.use(express.json());

app.use('/siswa', siswaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
