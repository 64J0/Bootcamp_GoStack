import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

interface DTOID {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: DTOID): Promise<void> {
    if (!id) {
      throw new AppError('Invalid ID', 400);
    }

    const transactionsRepository = getRepository(Transaction);

    const foundTransaction = transactionsRepository.findOne(id);

    if (!foundTransaction) {
      throw new AppError('Invalid ID', 400);
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
