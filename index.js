const server = require('./app');
const port = 8801;

server.listen(port, () => {
  console.log(`Server running in port ${port}`);
})