import { useSelector } from 'react-redux';
import { IQuote } from '../../types/quote';
import { IQuoteState } from './reducer';

interface IState {
  quotes: IQuoteState;
}

export function useQuotes(): IQuote[] {
  return useSelector<IState, IQuote[]>((a) => Object.values(a.quotes.entities));
}
