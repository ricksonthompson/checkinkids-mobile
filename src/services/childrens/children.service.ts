import { FiltersChildrenDTO } from '../../interfaces/children/filtersChildren.interface';
import { generateQueryForChildrens } from '../../utils/Queries';
import {api} from '../api';
import {GetAllChildrensReponse} from './responses/getAllChildrens.response';

export const getAllChildrens = (token: string, filters?: FiltersChildrenDTO): Promise<GetAllChildrensReponse> => {
  let urlWithFilters: string;

  if (filters) urlWithFilters = generateQueryForChildrens('/api/childrens', filters);

  return new Promise((resolve, reject) => {
    api
      .get<GetAllChildrensReponse>(urlWithFilters ? urlWithFilters : '/api/childrens', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => resolve(response.data))
      .catch((error: any) => reject(error));
  });
};
