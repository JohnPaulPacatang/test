import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_RECIPIENT,
    subject: `cec.com.ph - Message from ${body.Name}`,
    text: body.Message + " | Sent by: " + body.Contact,
    html: `<div>${body.Message}</div><p>Sent by: ${body.Contact}</p>`
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

  res.status(200).json({ code: 'OK' })
}
