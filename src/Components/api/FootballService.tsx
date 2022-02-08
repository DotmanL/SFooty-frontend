import axios from 'axios';
import { ApiResponse } from './types';

const rapidApiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;

const apiClient = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/',
  params: { league: '39', season: '2021' },
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': rapidApiKey,
  },
});

const findAll = async () => {
  const response = await apiClient.get<ApiResponse>('v3/teams');
  // console.log(response.data.response);

  return response.data.response;
};

const FootballApi = {
  findAll,
};

export default FootballApi;
