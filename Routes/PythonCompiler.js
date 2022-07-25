const express = require('express');
const router = express.Router();
// compiler setting up
var compiler = require('compilex');
var options = { stats: true };
compiler.init(options);


router.get('/', (req, res) => {
    res.json({ message: 'python Compiler' });
});

router.post('/', (req, res) => {
    const code = req.body.code;
    console.log(code);
    var envData = { OS: "windows" };
    compiler.compilePython(envData, code, function (data) {
        res.send(data);
    });
});

module.exports = router;