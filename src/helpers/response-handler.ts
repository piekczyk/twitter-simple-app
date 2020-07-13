import {isEmptyObj} from 'helpers/is-empty';

export const responseHandler = async <T>(response: Response): Promise<T> => {
  const data = await response.json();

  if (isEmptyObj(data)) {
    throw new Error('Not found any data');
  }
  if (data.message) {
    throw new Error(data.message);
  }

  if (data.error) {
    throw new Error(data.error);
  }
  return data;
};
