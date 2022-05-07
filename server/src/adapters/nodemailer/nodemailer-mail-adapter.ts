import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "78d5ca0e1b499c",
      pass: "3bfb7036ed08e5"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Diego Fernandes <ivan.mduarte@live.com>',
        subject,
        html: body,
    });
    }
}