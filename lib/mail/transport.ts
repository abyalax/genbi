import nodemailer from 'nodemailer';

import { envServer } from '~/common/env/server';

export const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: envServer.GOOGLE_EMAIL,
    pass: envServer.GOOGLE_APP_PASSWORD,
  },
});
