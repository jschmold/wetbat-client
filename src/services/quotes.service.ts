import { IQuote } from '../types/quote';

export class QuotesService {
  public loadQuotes(): Promise<IQuote[]> {
    throw new Error('not implemented');
  }
}
