
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENV  = process.env.APP_ENV || 'dev';

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Running ${ENV} server on port ${PORT}`);
});
