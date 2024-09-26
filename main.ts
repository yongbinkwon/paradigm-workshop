import { Flight } from "./flight.ts";

function testyBesty() {
  return "Deklarativ kode er best";
}

console.log("Bin prøver seg på Javascript");
console.log(testyBesty());

const flight = new Flight(
  "Oslo",
  "Seoul",
  5000,
  "Delta",
  600,
  new Date("2023-10-01T10:00:00Z")
);
// make more flights
const flight2 = new Flight(
  "Oslo",
  "New York",
  5234,
  "Delta",
  723,
  new Date("2023-10-02T11:00:00Z")
);
const flight3 = new Flight(
  "Oslo",
  "Tokyo",
  6123,
  "Delta",
  512,
  new Date("2023-10-03T12:00:00Z")
);
const flight4 = new Flight(
  "Oslo",
  "Beijing",
  4789,
  "Delta",
  634,
  new Date("2023-10-04T13:00:00Z")
);
const flight5 = new Flight(
  "Oslo",
  "Paris",
  3890,
  "Delta",
  456,
  new Date("2023-10-05T14:00:00Z")
);
const flight6 = new Flight(
  "Oslo",
  "London",
  5321,
  "Delta",
  789,
  new Date("2023-10-06T15:00:00Z")
);
const flight7 = new Flight(
  "Oslo",
  "Berlin",
  4678,
  "Delta",
  654,
  new Date("2023-10-07T16:00:00Z")
);
const flight8 = new Flight(
  "Oslo",
  "Moscow",
  5890,
  "Delta",
  712,
  new Date("2023-10-08T17:00:00Z")
);
const flight9 = new Flight(
  "Oslo",
  "Cape Town",
  6234,
  "Delta",
  834,
  new Date("2023-10-09T18:00:00Z")
);
const flight10 = new Flight(
  "Oslo",
  "Sydney",
  7123,
  "Delta",
  923,
  new Date("2023-10-10T19:00:00Z")
);

//flight array
const flightArray = [
  flight,
  flight2,
  flight3,
  flight4,
  flight5,
  flight6,
  flight7,
  flight8,
  flight9,
  flight10,
];

const filterByLocation = (flightsArray: Flight[], location: string) => {
  return flightsArray.filter(
    (f) => f.destination === location || f.origin === location
  );
};

console.log(filterByLocation(flightArray, "Beijing"));

enum SortOrder {
  ASC = 1,
  DES = 2,
}

const sortBy = (
  flightsArray: Flight[],
  field: "ticketPrice" | "durationInMinutes",
  order: SortOrder
) => {
  return flightsArray.slice().sort((a, b) => {
    if (order === SortOrder.ASC) {
      return a[field] - b[field];
    } else {
      return b[field] - a[field];
    }
  });
};

console.log(sortBy(flightArray, "durationInMinutes", SortOrder.ASC));

const getFlightsLeavingBefore = (flightArray: Flight[], date: Date) => {
  return flightArray.filter((flight) => flight.startTime < date);
};

const getFlightsLeavingAfter = (flightArray: Flight[], date: Date) => {
  return flightArray.filter((flight) => flight.startTime > date);
};

console.log(
  "before",
  getFlightsLeavingBefore(flightArray, new Date("2023-10-05T00:00:00Z"))
);

console.log(
  "after",
  getFlightsLeavingAfter(flightArray, new Date("2023-10-05T00:00:00Z"))
);

const getFlightsArrivingBefore = (flightArray: Flight[], date: Date) => {};
