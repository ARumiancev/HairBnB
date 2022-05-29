import { Sitter } from '../types';
import ApiService from './api-service';
import { CreateSitter } from '../types/create-sitter';

const fetchItems = async (): Promise<Sitter[]> => {
  const { data } = await ApiService.get<Sitter[]>('/sitters');
  return data;
};

const createNewItem = async ({
  name, city, email, about, img,
}: CreateSitter) => {
  const { data } = await ApiService.post<Sitter>('/sitters/', {
    name, city, email, about, img,
  });
  return data;
};

const SitterService = {
  fetchItems,
  createNewItem,
};

export default SitterService;
