'use strict';

import { User } from '../models';

const jwt = require('jsonwebtoken'),
  nodemailer = require('nodemailer'),
  hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '',
    pass: ''
  }
});

const hbsOptions = {
  viewEngine: {
    extname: '.hbs',
    layoutsDir: 'src/mail/views',
    partialsDir: 'src/mail/views',
    defaultLayout: 'layout',
  },
  viewPath: 'src/mail/views'
}

transporter.use('compile', hbs(hbsOptions));

export async function main(user: User) {

  const TOKEN = {
    expiresIn: '2d',
    // algorithm: 'ES256',
    issuer: 'Grupo AR',
    subject: user.email,
    audience: 'https://grupoar.com'
  };

  const PRIVATE_KEY = 'AR';

  return new Promise((resolve, reject) => {
    jwt.sign({ user }, PRIVATE_KEY, TOKEN, (err: object, token: object) => {
      sendEmail(user, token, (err: object, data: object) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  });

  function sendEmail(user: User, token: object, callback: any) {
    transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: 'wainer.rodriguez@grupoardigital.com',
      subject: "Hello ✔",
      template: 'register',
      context: {
        name: user.name,
        surname: user.surnames,
        link: `http://localhost:3000/${token}`
      }
    }, callback)
  }
}
