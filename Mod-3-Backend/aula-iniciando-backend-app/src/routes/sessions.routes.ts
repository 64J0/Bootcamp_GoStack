import { Router } from 'express';

import AuthenticateUserService from '../service/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  // Regras de negócio
  // Verificar se o e-mail existe
  // Verificar se o hash do password coincide com o do banco de dados

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({ email, password });

  delete user.password;

  return response.status(200).json({ user, token });
});

export default sessionsRouter;
