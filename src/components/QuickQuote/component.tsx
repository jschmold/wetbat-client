import React, { useState } from 'react';
import Materialize from 'materialize-css';

import './styles.scss';

interface IQuoteForm {
  from: string;
  destinationId: string;
  departureDate: string;
  returnDate: string;
  people: number;
  transportation: string;
  name: string;
}

export default function QuickQuote() {
  const [form, setForm] = useState<IQuoteForm>({
    from: '',
    destinationId: '',
    departureDate: '',
    returnDate: '',
    people: 0,
    transportation: '',
    name: '',
  });

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
      <div className="actions"></div>
      <div className="content">
        <div className="input-field">
          <label>From</label>
          <input
            type="text"
            value={form.from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Destination</label>
          <input
            type="text"
            value={form.destinationId}
            onChange={(e) => setDestinationId(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Depart Date</label>
          <input
            type="text"
            className="datepicker"
            value={form.departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Return Date</label>
          <input
            type="text"
            className="datepicker"
            value={form.returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="number"
            value={form.people}
            min={0}
            max={20}
            onChange={(e) => setPeople(parseInt(e.target.value, 10))}
          />
          <label>People</label>
        </div>

        <div className="input-field">
          <select
            value={form.transportation}
            onChange={(e) => setTransportation(e.target.value)}
          >
            <option value=""></option>
            <option value="rental-car">Car Rental</option>
            <option value="service">Car Service</option>
            <option value="taxi">Taxis</option>
          </select>
          <label>Transportation</label>
        </div>

        <div className="input-field">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
      </div>
    </div>
  );
}
