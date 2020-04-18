// É um meio-campo entre a persistência dos dados e a rota. Dentro
// do repositório é onde teremos métodos para lidar com as informações
// persistidas. Geralmente é criado UM repositório para cada model.
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const objBalance = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    this.transactions.map(transaction => {
      if (transaction.type === 'income') {
        objBalance.income += transaction.value;
      } else {
        objBalance.outcome += transaction.value;
      }
      return null;
    });

    objBalance.total = objBalance.income - objBalance.outcome;
    return {
      income: objBalance.income,
      outcome: objBalance.outcome,
      total: objBalance.total,
    };
  }

  public create({ title, type, value }: Omit<Transaction, 'id'>): Transaction {
    // TODO
    const newTransaction = new Transaction({ title, type, value });
    if (type === 'income') {
      this.transactions.push(newTransaction);
      return newTransaction;
    }

    if (this.getBalance().total - value >= 0) {
      this.transactions.push(newTransaction);
      return newTransaction;
    }

    throw Error('Insufficient funds');
  }
}

export default TransactionsRepository;
