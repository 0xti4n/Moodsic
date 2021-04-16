const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');


router.post('/emotions', async (req, res) => {
    const { Path } = req.body;
    const path = __dirname
    const pythonscript = path + '/' + 'emotions.py'
    const print = spawn('python3', [pythonscript, Path])
    print.stdout.on('data', (data) => {
      //const Data = `${data}`
      const Data = `${data}`
      console.log(Data)
      //res.send("ok")
      res.send(JSON.parse(Data))
    });
  
    print.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    print.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
});

module.exports = router;
