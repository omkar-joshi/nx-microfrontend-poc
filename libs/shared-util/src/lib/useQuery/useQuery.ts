import { useFetch } from 'use-http';

export const useQuery = (endpoint: string) => {
  const serverUrl = `${process.env.NX_API_BASE_URL}${endpoint}`;
  const { data, loading } = useFetch(serverUrl, {}, []);

  return { data, loading };
};
