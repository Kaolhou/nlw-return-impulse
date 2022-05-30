declare global{
    namespace NodeJS{
        interface ProcessEnv{
            ORIGIN:string;
            DATABASE_URL:string;
        }
    }
}
export {}