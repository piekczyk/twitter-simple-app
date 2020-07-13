import {API_URL} from 'api';
import {responseHandler} from 'helpers';
import {Details} from 'types/details';

const getPostDetails = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await responseHandler<Details>(response);
};

const getPosts = async () => {
  const response = await fetch(API_URL);
  return await responseHandler<Details[]>(response);
};

export const postsService = {
  getPostDetails,
  getPosts,
};
