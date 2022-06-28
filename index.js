const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shanawazattari555@gmail.com',
      pass: 'Shah786#@!'
    }
  });

var mailOptions = {
    from: 'shanawazattari555@gmail.com',
    to: 'shahnawaz@skills-agency.com',
    subject: 'Sending Email via Node.js',
    text: 'That was easy!',
    attachments: [
        {
            filename: 'file.txt',
            content: 'Some content',
            contentType: 'text/plain'
        }
    ]
  };
    
  mail.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(3610, () => {
    console.log('Server is running on port 3610');
}
);

