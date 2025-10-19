import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getDirections = async () => {
  const response = await axios.get(`${API_URL}/directions`);
  return response.data;
};

export const getDirectionById = async (slug: string) => {
  const response = await axios.get(`${API_URL}/directions/${slug}`);
  return response.data;
};