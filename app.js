const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});
