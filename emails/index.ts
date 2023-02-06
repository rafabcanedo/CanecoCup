import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

const email = process.env.MAILADRESS;
const emailPass = process.env.MailPASS;

const transport = nodemailer.createTransport({
  pool: true,
  host: "smtp.example.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: email,
    pass: emailPass,
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: "replace@me.with.your.com",
  configPath: "./mailing.config.json",
});

export default sendMail;
