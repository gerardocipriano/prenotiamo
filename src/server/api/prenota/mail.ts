import transport from "~/server/utils/mail"
import { DailyOrder } from "~/types"

transport.verify(function(error, success) {
    if (error) {
          console.log(error);
    } else {
          console.log('Server is ready to take our messages');
    }
  });

  var mailOptions = {
    
    to: 'user1@example.com',
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
};


export default defineEventHandler(async function() {
    try {
        return await transport.sendMail(mailOptions)
    } catch(err) {
       console.log(err)
       return err
    }
});