const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')(app);

app.use('/api', apiRoutes);
app.use('*', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});