import nodemailer from 'nodemailer';
import dotenv from 'dotenv';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "06642beb68d404",
        pass: "ea3e4ccdd17f24"
    }
});
export default transport;

