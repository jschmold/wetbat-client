import { IQuoteForm, IFormErrors } from './types';

export const defaultFormValue: IQuoteForm = {
  fromId: '',
  destinationId: '',
  departureDate: '',
  returnDate: '',
  people: 1,
  transportation: '',
  name: '',
};

export const defaultFormErrors: IFormErrors = {
  fromId: null,
  destinationId: null,
  departureDate: null,
  returnDate: null,
  people: null,
  transportation: null,
  name: null,
};
