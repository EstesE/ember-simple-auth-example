module.exports = function (app) {
  app.post('/token', function (req, res) {
      res.setHeader('Content-Type', 'application/json');

      if (req.body.grant_type === 'password') {
          if (req.body.username === 'letme' && req.body.password === 'in') {
              res.send({ access_token: 'secret token!' });
          } else {
              res.status(400).send({ error: 'invalid_grant' });
          }
      } else {
          res.status(400).send({ error: 'unsupported_grant_type' });
      }
  });

  app.post('/revoke', function (req, res) {
      if (req.body.token_type_hint === 'access_token' || req.body.token_type_hint === 'refresh_token') {
          res.send('');
      } else {
          res.status(400).send({ error: 'unsupported_token_type' });
      }
  })
};


// /* eslint-env node */
// 'use strict';

// module.exports = function (app) {
//   const express = require('express');
//   let tokenRouter = express.Router();

//   tokenRouter.get('/', function (req, res) {
//     res.send({
//       'token': []
//     });
//   });

//   tokenRouter.post('/', function (req, res) {
//     res.status(201).end();
//   });

//   tokenRouter.get('/:id', function (req, res) {
//     res.send({
//       'token': {
//         id: req.params.id
//       }
//     });
//   });

//   tokenRouter.put('/:id', function (req, res) {
//     res.send({
//       'token': {
//         id: req.params.id
//       }
//     });
//   });

//   tokenRouter.delete('/:id', function (req, res) {
//     res.status(204).end();
//   });

//   // The POST and PUT call will not contain a request body
//   // because the body-parser is not included by default.
//   // To use req.body, run:

//   //    npm install --save-dev body-parser

//   // After installing, you need to `use` the body-parser for
//   // this mock uncommenting the following line:
//   //
//   //app.use('/api/token', require('body-parser').json());
//   app.use('/api/token', tokenRouter);
// };
