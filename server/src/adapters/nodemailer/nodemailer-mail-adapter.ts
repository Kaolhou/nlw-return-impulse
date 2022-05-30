import { MailAdapter, SendMailAdapter } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c360b4be17cd73",
      pass: "f57efc35586715"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject,body}: SendMailAdapter){


        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: 'André Mendes da Rocha <xdroid42@gmail.com>',
            subject,
            html: body
        })
    };
}