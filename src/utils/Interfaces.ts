import { ReactNode } from 'react'

export interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export interface TransactionProviderProps {
  children: ReactNode;
}

export type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

export interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}