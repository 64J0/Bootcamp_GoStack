import { EntityRepository, Repository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionsFormated {
  transactions: Transaction[];
  balance: Balance;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<TransactionsFormated> {
    const transactionsDB = getRepository(Transaction);
    const transactionsDataArray = await transactionsDB.find();

    let income = 0;
    let outcome = 0;

    transactionsDataArray.map(transactionObject => {
      if (transactionObject.type === 'income') {
        income += Number(transactionObject.value);
        return null;
      }
      outcome += Number(transactionObject.value);
      return null;
    });

    const total = income - outcome;

    const Balance = {
      income,
      outcome,
      total,
    };

    const transactionsFormated = {
      transactions: transactionsDataArray,
      balance: Balance,
    };

    return transactionsFormated;
  }
}

export default TransactionsRepository;
