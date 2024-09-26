export class Flight {
  constructor(
    public origin: string,
    public destination: string,
    public ticketPrice: number,
    public airline: string,
    public durationInMinutes: number,
    public startTime: Date
  ) {}
}
