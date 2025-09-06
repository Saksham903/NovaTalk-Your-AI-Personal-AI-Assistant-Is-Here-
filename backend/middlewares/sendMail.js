import { createTransport } from "nodemailer";

const sendMail = async (email, subject, htmlContent) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
    tls: {
      rejectUnauthorized: false, // <--- disables certificate check
    },
  });

  await transport.sendMail({
    from: process.env.Gmail,
    to: email,
    subject,
    html: htmlContent, // Use the provided HTML content dynamically
  });
};

export default sendMail;
