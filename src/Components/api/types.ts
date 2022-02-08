
export interface Teams {
  team?: {
  id: number | any;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
  }
  venue?:  {
    id: string;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  }
}

export interface ApiResponse {
    response: Teams[]
}
