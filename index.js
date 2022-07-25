const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const bodyparser = require('body-parser');
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

// middlewares
app.get('/', (req, res) => { res.json({ ping: "Active", message: "Compilers API", supportedLanguages: "Python,Java,C,C++,C#,visual basic" }) })
const pythonRoute = require('./Routes/PythonCompiler');
app.use('/python', pythonRoute);


PORT = process.env.PORT || 3000;
server.listen(PORT, () => { console.log(`Server Started at [${PORT}]`) })