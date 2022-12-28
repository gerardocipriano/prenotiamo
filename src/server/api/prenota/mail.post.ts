import transport from "~/server/utils/mail"
import { decodingUser, requireLogin, requireOrdinante } from "~/server/utils/auth"
import { DailyOrder } from "~/types"

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
    requireOrdinante(user)
    let html: string = `<!doctype html><html lang="it"><h1 style="font-family: Arial, Helvetica, sans-serif">Buongiorno, 
    Di seguito le prenotazioni del giorno:</h1>
    <section class="mt-1">
    <table style="border-collapse: collapse" >
      <thead >
        <tr>
            <th style="padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #1082F3;color: white;  border-collapse: collapse;width: 25%; font-family: Arial, Helvetica, sans-serif" id="name">Nome</th>
            <th style="padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #1082F3;color: white;  border-collapse: collapse;width: 25%; font-family: Arial, Helvetica, sans-serif" id="company">Azienda</th>
            <th style="padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #1082F3;color: white;  border-collapse: collapse;width: 25%; font-family: Arial, Helvetica, sans-serif" id="dish">Piatto</th>
            <th style="padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #1082F3;color: white;  border-collapse: collapse;width: 25%; font-family: Arial, Helvetica, sans-serif" id="note">Note</th>
        </tr>
      </thead>`
    const order_tdst: DailyOrder[] = await readBody(event)

    order_tdst.forEach( (x) => {
      html += `<tr style="tr:hover"><td style="padding: 8px;font-family: Arial, Helvetica, sans-serif">`+x.name+`</td>`
      html += `<td style="padding: 8px;font-family: Arial, Helvetica, sans-serif">`+x.company+`</td>`
      html += `<td style="padding: 8px;font-family: Arial, Helvetica, sans-serif">`+x.food_name+`</td>`
      html += `<td style="padding: 8px;font-family: Arial, Helvetica, sans-serif">`+x.note+`</td></tr>`
  });

  html+=`</html>`

    const mailOptions = {
    
        to: 'user1@example.com',
        subject: 'Ordine del giorno',
        text: '',
        html: html
    };
    try {
        return await transport.sendMail(mailOptions)
    } catch(err) {
       console.log(err)
       return err
    }
});