require('dotenv').config();
const app = require('./server');

app.listen(app.get('port'), () => {
  console.log('server on ', app.get('port'));
});