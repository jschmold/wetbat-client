import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

import './styles.scss';

interface IQuoteForm {
  from?: string;
  destinationId?: string;
  departureDate?: string;
  returnDate?: string;
  people?: number;
  transportation?: string;
  name?: string;
}

export default function QuickQuote() {
  const [form, setForm] = useState<IQuoteForm>({});
  const setFormField = (k: keyof IQuoteForm, v: IQuoteForm[typeof k]) =>
    setForm({ ...form, [k]: v });

  const setFrom = (v: string) => setFormField('from', v);
  const setDestinationId = (v: string) => setFormField('destinationId', v);
  const setDepartureDate = (v: string) => setFormField('departureDate', v);
  const setReturnDate = (v: string) => setFormField('returnDate', v);
  const setPeople = (v: number) => setFormField('people', v);
  const setTransportation = (v: string) => setFormField('transportation', v);
  const setName = (v: string) => setFormField('name', v);

  return (
    <div className="dash-card with-actions quick-quote">
      <div className="actions">
        <i className="icon material-icons">fast_forward</i>
        <h4 className="title">Quick Quote</h4>
        <div className="extras">
          <i className="icon material-icons">fullscreen</i>
        </div>
      </div>
      <form className="content" noValidate action="none">
        <FormControl variant="filled">
          <InputLabel shrink>From</InputLabel>
          <Select
            label="From"
            onChange={(a) => setFrom(a.target.value as string)}
            value={form.from}
            labelId="quick-quote-from-label"
          >
            <MenuItem value="">None</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled">
          <InputLabel shrink>Destination</InputLabel>
          <Select
            value={form.destinationId}
            onChange={(e) => setDestinationId(e.target.value as string)}
          >
            <MenuItem value="">None</MenuItem>
          </Select>
        </FormControl>

        <TextField
          type="date"
          label="Depart Date"
          variant="filled"
          defaultValue=""
          value={form.departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          variant="filled"
          label="Return Date"
          type="date"
          className="datepicker"
          InputLabelProps={{ shrink: true }}
          value={form.returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <TextField
          type="number"
          label="People"
          variant="filled"
          value={form.people}
          onChange={(e) => setPeople(parseInt(e.target.value, 10))}
        />

        <FormControl variant="filled">
          <InputLabel>Transportation</InputLabel>
          <Select
            value={form.transportation}
            onChange={(e) => setTransportation(e.target.value as string)}
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
          onChange={(e) => setName(e.target.value)}
        />

        <button className="submit-button">Create Quote</button>
      </form>
    </div>
  );
}
