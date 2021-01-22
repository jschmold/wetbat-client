import { Action } from '@reduxjs/toolkit';
import { IQuote } from '../../types/quote';

export interface ILoadQuotes extends Action {
  payload: IQuote[];
}
