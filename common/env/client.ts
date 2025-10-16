import z from 'zod';

const envClientSchema = z.object({
  NEXT_PUBLIC_BASE_URL_API: z.string().min(1, 'NEXT_PUBLIC_BASE_URL_API is required'),
  NEXT_PUBLIC_BASE_URL: z.string().min(1, 'NEXT_PUBLIC_BASE_URL is required'),
  NEXT_PUBLIC_EMAIL_USER_ID: z.string().min(1, 'NEXT_PUBLIC_EMAIL_USER_ID is required, go to set up at email JS'),
  NEXT_PUBLIC_EMAIL_SERVICE_ID: z.string().min(1, 'NEXT_PUBLIC_EMAIL_SERVICE_ID is required, go to set up at email JS'),
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: z.string().min(1, 'NEXT_PUBLIC_EMAIL_TEMPLATE_ID is required, go to set up at email JS'),
});

export const envClient = envClientSchema.parse({
  NEXT_PUBLIC_BASE_URL_API: process.env.NEXT_PUBLIC_BASE_URL_API,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_EMAIL_USER_ID: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
  NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
});
