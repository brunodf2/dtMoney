import React from 'react';

import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionsTable';

import { Container } from './styles';

export const DashBoard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};
