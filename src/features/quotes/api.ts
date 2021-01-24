import { IQuote } from '../../types/quote';
import { useAPIClient } from '../http';

export async function loadQuotes(): Promise<IQuote[]> {
  const http = useAPIClient();
  const response = await http.get('quotes');
  return response.data;
}
