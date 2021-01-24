import { defaultFormErrors } from './constants';
import { IQuoteForm, IFormErrors } from './types';

export function validateForm(arg: IQuoteForm): IFormErrors {
  const err = { ...defaultFormErrors };

  if (arg.name?.trim().length === 0) {
    err.name = 'Name is required';
  }

  if (arg.fromId.length === 0) {
    err.fromId = 'Please select one';
  }

  if (arg.destinationId.length === 0) {
    err.destinationId = 'Please select one';
  }

  if (arg.returnDate.length === 0) {
    err.returnDate = 'Please select a date';
  }

  if (arg.departureDate.length === 0) {
    err.departureDate = 'Please select a date';
  }

  if (isNaN(arg.people) || arg.people < 1) {
    err.people = 'Please select 1 or more';
  }

  return err;
}
