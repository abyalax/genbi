import { defineConfig } from 'drizzle-kit';

import { envServer } from './common/env/server';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: envServer.DATABASE_URL,
  },
});
