import transport from "~/server/utils/mail"
import { decodingUser, requireLogin } from "../../utils/auth"

transport.verify(function(error, success) {
    if (error) {
          console.log(error);
    } else {
          console.log('Server is ready to take our messages');
    }
  });




export default defineEventHandler(async function(event) {
    
    const user = decodingUser(event)
    requireLogin(user)

    let { order_list } = await readBody(event)
    console.log(order_list)

    const parola = "ciao"

    let mailOptions = {
    
        to: 'user1@example.com',
        subject: 'Ordine del giorno',
        text: '',
        html: `<!doctype html>
          <html lang="it">
          <p>Buongiorno, Di seguito le prenotazioni del giorno:</p> ${order_list} 
          <p>Cordialmente</p>
          <footer><p><i>Prenotiamo! Automatic Mail System</i></p></footer>
          </html>`
    };
    try {
        return await transport.sendMail(mailOptions)
    } catch(err) {
       console.log(err)
       return err
    }
});