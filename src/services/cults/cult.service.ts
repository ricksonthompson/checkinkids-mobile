import {api} from '../api';
import {GetAllCultsReponse} from './responses/getAllCults.response';

export const getAllCults = (): Promise<GetAllCultsReponse> => {

  return new Promise((resolve, reject) => {
    api
      .get<GetAllCultsReponse>('/api/cults')
      .then(response => resolve(response.data))
      .catch((error: any) => reject(error));
  });
};
