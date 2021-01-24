import { useSelector } from 'react-redux';
import { IAppState } from '../../store';
import { IQuote } from '../../types/quote';
import { IQuoteState } from './reducer';

export function useQuoteState() {
  return useSelector<IAppState, IQuoteState>((a) => a.quotes);
}

export function useAllQuotes(): IQuote[] {
  const state = useQuoteState();
  return Object.values(state.entities);
}
