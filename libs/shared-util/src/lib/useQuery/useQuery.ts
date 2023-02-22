import { useFetch } from 'use-http';

const API_BASE_URL = 'https://63f5fee4ab76703b15b60449.mockapi.io/api/v1';

export const useQuery = (endpoint: string) => {
  const serverUrl = `${API_BASE_URL}${endpoint}`;
  const { data, loading } = useFetch(serverUrl, {}, []);

  return { data, loading };
};
