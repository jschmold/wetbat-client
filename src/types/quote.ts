export interface IQuote {
  id: number;
  oid: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  amount: number;
  fromId: string;
  destinationId: string;
  departureDate: Date;
  returnDate: Date;
  travelMethod: string | null;
}
