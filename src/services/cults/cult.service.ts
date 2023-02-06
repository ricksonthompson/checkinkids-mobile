import {api} from '../api';
import {GetAllCultsReponse} from './responses/getAllCults.response';

export const getAllCults = (token: string): Promise<GetAllCultsReponse> => {
  return new Promise((resolve, reject) => {
    api
      .get<GetAllCultsReponse>('/api/cults', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => resolve(response.data))
      .catch((error: any) => reject(error));
  });
};
