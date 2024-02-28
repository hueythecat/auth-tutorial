import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  // console.log('process.env.RESEND_API_KEY', process.env.RESEND_API_KEY)
  const confrirmLink = `http://localhost:3000/auth/new-verification=${token}`;
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Please confirm your email address',
    html: `
      <p>Hi there,</p>
      <p>Please click the link below to confirm your email address:</p>
      <a href="${confrirmLink}">Confirm your email</a>
    `});
}