import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_APPWRITE_ENDPOINT: z.string(),
    NEXT_PUBLIC_APPWRITE_PROJECT: z.string(),
    NEXT_PUBLIC_APPWRITE_DB: z.string(),
    NEXT_PUBLIC_APPWRITE_COLLECTION: z.string(),
    NEXT_PUBLIC_APPWRITE_API_KEY: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APPWRITE_ENDPOINT:  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT:  process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
    NEXT_PUBLIC_APPWRITE_API_KEY: process.env.NEXT_PUBLIC_APPWRITE_API_KEY,
    NEXT_PUBLIC_APPWRITE_DB: process.env.NEXT_PUBLIC_APPWRITE_DB,
    NEXT_PUBLIC_APPWRITE_COLLECTION: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
