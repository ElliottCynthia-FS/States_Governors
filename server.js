require('dotenv').config();
const http = require('http');
const app = require('./app');

http.createServer(app).listen(process.env.port || 3000, () => console.log(`Server running on port ${process.env.port}`));

//* Other options:
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, () => {
    // console.log(`Express server listening on port ${PORT}`);
// }); 