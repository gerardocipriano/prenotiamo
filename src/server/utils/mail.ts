import nodemailer from 'nodemailer';



const transport = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: 2525,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.MAILTRAP_SECRET,
    }
});
export default transport;

console.log(process.env.MAILTRAP_SECRET)