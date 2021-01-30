import { IQuote } from 'types/quote';
import { useAPIClient } from 'features/http';
import { ICreateQuote } from './types';

export async function loadQuotes(): Promise<IQuote[]> {
  const http = useAPIClient();
  const response = await http.get('quotes');
  return response.data;
}

export async function createQuote(arg: ICreateQuote) {
  const http = useAPIClient();
  const response = await http.post<IQuote>('quotes', arg);
  return response.data;
}
