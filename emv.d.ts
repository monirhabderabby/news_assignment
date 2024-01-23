declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
    AUTH_SECRET: string;
    NEXT_PUBLIC_BASE_URL: string;
  }
}
