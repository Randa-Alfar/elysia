import type { Elysia } from 'elysia';
import AuthController from './auth.controller';


export default function groupRoutes(app: Elysia) {
  return app.get('/', AuthController.getLanding)
            .get('/hello', AuthController.getHello);
}
