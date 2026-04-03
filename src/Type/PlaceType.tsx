import Weather from "./Weather";

interface Place{

    id: number;
    placeName: string;
  destinationType: string;
  bestTravelPeriod: string;
  description1: string;
  description2?: string;
  description3?: string;
  mapLocation: string;
  weather: Weather | null;
}

export default Place;