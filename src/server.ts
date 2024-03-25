import { Elysia } from "elysia";
import dotenv from "dotenv"
import AuthRoutes from "./components/auth/auth.route";
import cors from "@elysiajs/cors";
import swagger from '@elysiajs/swagger'

dotenv.config();
const port =  process.env.PORT;

class App {
    public app: Elysia;
    constructor(){
      this.app = new Elysia();
      this.router();
      this.Swagger();
    }

    protected async router():Promise<void>{
      this.app.use(cors());

      this.app.group("/auth", AuthRoutes);

    }

    protected async Swagger(): Promise<void> {
      this.app.use(
      swagger({
          documentation: {
            tags: [
              { name: 'Auth', description: 'Authentication endpoints' }
            ]
          }, 
          // it will work without it but it's just for explianation
          path: '/swagger'
        })
      )
    }
}
const app = new App().app;

app.listen(port?port:3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
