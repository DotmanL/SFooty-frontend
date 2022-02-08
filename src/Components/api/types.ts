type team = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
};

type venue = {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
};

export interface Teams {
  team?: team;
  venue?: venue;
}

export interface ApiResponse {
  response: Teams[];
}
