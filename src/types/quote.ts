export interface IQuote {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  destinationId: string;
  departureDate: Date;
  returnDate: Date;
  travelMethod: string | null;
}
