import { Action } from '@reduxjs/toolkit';
import { IQuote } from 'types/quote';

export interface ILoadQuotes extends Action {
  payload: IQuote[];
}

export interface ICreateQuote {
  fromId: string;
  destinationId: string;
  departureDate: Date;
  returnDate: Date;
  people: number;
  transportation: string;
  name: string;
}
