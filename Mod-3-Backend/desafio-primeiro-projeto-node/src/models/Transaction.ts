// Model ou entidade é o esqueleto, o formato de um dado que é armazenado
// em algum lugar pela aplicação, por exemplo, em uma variável na memória
// ou em um banco de dados.
import { uuid } from 'uuidv4';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
