import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import CategoryRepository from '../repositories/CategoryRepository';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    if (!title || !value || !type || !category) {
      throw new AppError('Needs more information', 400);
    }

    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const getTransactionsBalance = await transactionsRepository.getBalance();
    const { total } = getTransactionsBalance.balance;

    if (type === 'outcome') {
      if (total - value < 0) {
        throw new AppError('Funds are insufficient', 400);
      }
    }

    const findCategoryWithSameTitle = await categoryRepository.findCategoryWithSameTitle(
      category,
    );

    let newCategory = findCategoryWithSameTitle;

    if (!newCategory) {
      newCategory = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(newCategory);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category: newCategory,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
