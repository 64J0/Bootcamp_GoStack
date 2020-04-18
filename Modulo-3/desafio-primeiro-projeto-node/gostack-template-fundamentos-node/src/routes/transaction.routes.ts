import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();
const createTransactionService = new CreateTransactionService(
  transactionsRepository,
);

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    const allTransactions = transactionsRepository.all();
    const balanceTransactions = transactionsRepository.getBalance();
    const answer = {
      transactions: allTransactions,
      balance: balanceTransactions,
    };
    return response.status(200).json(answer);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  // type = income (depósitos) || outcome (retiradas)
  const { title, value, type } = request.body;

  try {
    // TODO
    const createTransaction = createTransactionService.execute({
      title,
      value,
      type,
    });
    return response.status(200).json(createTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
