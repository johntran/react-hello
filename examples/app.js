'use strict';

import express from 'express';
import path from 'path';

let app = express();

const staticPath = path.resolve('build/');

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="content"></div>
        <div id="root"></div>
        <script src="https://fb.me/react-0.14.2.js"></script>
        <script src="https://fb.me/react-dom-0.14.2.js"></script>
        <script src="/app-client.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static(staticPath));

export default app;
