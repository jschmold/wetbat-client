import React, { FormEvent, useState } from 'react';

import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

import { useAllDestinations } from 'features/destinations/hooks';
import { IDestination } from 'types/destination';
import { defaultFormErrors, defaultFormValue } from './constants';
import { IFormErrors, IQuoteForm } from './types';
import { validateForm } from './validation';
import { ICreateQuote } from 'features/quotes/types';
import { createQuote } from 'features/quotes/thunks';
import { useDispatch } from 'react-redux';

import './styles.scss';

export default function QuickQuote() {
  const [form, setForm] = useState<IQuoteForm>(defaultFormValue);
  const [errors, setFormErrors] = useState<IFormErrors>(defaultFormErrors);
  const dispatch = useDispatch();

  const setFormField = (k: keyof IQuoteForm) => (v: IQuoteForm[typeof k]) => {
    resetError(k);
    setForm({ ...form, [k]: v });
  };

  const setError = (k: keyof IFormErrors) => (v: IFormErrors[typeof k]) => {
    setFormErrors({ ...errors, [k]: v });
  };

  const resetError = (k: keyof IFormErrors) => setError(k)(null);

  const setFrom = setFormField('fromId');
  const setDestinationId = setFormField('destinationId');
  const setTransportation = setFormField('transportation');
  const setName = setFormField('name');

  const setDepartureDate = (v: string) => {
    if (new Date(v).getTime() < Date.now()) {
      setError('departureDate')('Future dates only');
      return;
    }
    setFormField('departureDate')(v);
  };

  const setReturnDate = (v: string) => {
    if (new Date(v).getTime() < Date.now()) {
      setError('returnDate')('Future dates only');
      return;
    }
    setFormField('returnDate')(v);
  };

  const setPeople = (v: number) => {
    const value = Math.max(v, 1);
    setFormField('people')(value);
  };

  const runValidation = () => setFormErrors(validateForm(form));
  const hasErrors = () => Object.values(errors).filter(a => a != null).length > 0;

  const destinations = useAllDestinations();

  const submit = (a: FormEvent<HTMLFormElement>) => {
    a.preventDefault();
    runValidation();

    if (hasErrors()) return;
    setForm(defaultFormValue);

    const data = tranformFormData({ ...form });
    dispatch(createQuote(data));
  };

  return (
    <div className="dash-card with-actions quick-quote">
      <div className="actions">
        <i className="icon material-icons">fast_forward</i>
        <h4 className="title">Quick Quote</h4>
        <div className="extras">
          <i className="icon material-icons">fullscreen</i>
        </div>
      </div>
      <form className="content" noValidate onSubmit={a => submit(a)}>
        <FormControl variant="filled">
          <InputLabel shrink>From</InputLabel>
          <Select
            label="From"
            onChange={a => setFrom(a.target.value as string)}
            value={form.fromId}
          >
            <MenuItem value="">None</MenuItem>
            {destinations.map(destinationItem)}
          </Select>
          {!!errors.fromId && (
            <FormHelperText error>{errors.fromId}</FormHelperText>
          )}
        </FormControl>

        <FormControl variant="filled">
          <InputLabel shrink>Destination</InputLabel>
          <Select
            value={form.destinationId}
            onChange={e => setDestinationId(e.target.value as string)}
          >
            <MenuItem value="">None</MenuItem>
            {destinations.map(destinationItem)}
          </Select>
          {!!errors.destinationId && (
            <FormHelperText error>{errors.destinationId}</FormHelperText>
          )}
        </FormControl>

        <TextField
          type="date"
          label="Depart Date"
          variant="filled"
          value={form.departureDate}
          onChange={e => setDepartureDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          error={!!errors.departureDate}
          helperText={errors.departureDate}
        />

        <TextField
          variant="filled"
          label="Return Date"
          type="date"
          className="datepicker"
          InputLabelProps={{ shrink: true }}
          value={form.returnDate}
          onChange={e => setReturnDate(e.target.value)}
          error={!!errors.returnDate}
          helperText={errors.returnDate}
        />

        <TextField
          type="number"
          label="People"
          variant="filled"
          value={form.people}
          onChange={e => setPeople(parseInt(e.target.value, 10))}
          error={!!errors.people}
          helperText={errors.people}
        />

        <FormControl variant="filled">
          <InputLabel>Transportation</InputLabel>
          <Select
            value={form.transportation}
            onChange={e => setTransportation(e.target.value as string)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="rental-car">Car Rental</MenuItem>
            <MenuItem value="service">Car Service</MenuItem>
            <MenuItem value="taxi">Taxis</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="filled"
          label="Name"
          value={form.name}
          onChange={e => setName(e.target.value)}
          error={errors.name != null}
          helperText={errors.name}
        />

        <button className="submit-button">Create Quote</button>
      </form>
    </div>
  );
}

function destinationItem(a: IDestination) {
  return (
    <MenuItem key={a.id} value={a.id}>
      {a.name}
    </MenuItem>
  );
}

function tranformFormData(form: IQuoteForm): ICreateQuote {
  return {
    fromId: form.fromId,
    destinationId: form.destinationId,
    departureDate: new Date(form.departureDate),
    returnDate: new Date(form.returnDate),
    people: form.people,
    transportation: form.transportation ?? '',
    name: form.name,
  };
}
