export interface IQuoteForm {
  fromId: string;
  destinationId: string;
  departureDate: string;
  returnDate: string;
  people: number;
  transportation: string;
  name: string;
}

export interface IFormErrors {
  fromId: string | null;
  destinationId: string | null;
  departureDate: string | null;
  returnDate: string | null;
  people: string | null;
  transportation: string | null;
  name: string | null;
}
