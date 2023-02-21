import { ChildrenDTO } from '../../interfaces/children/children.interface';
import { FiltersChildrenDTO } from '../../interfaces/children/filtersChildren.interface';
import { generateQueryForChildrens } from '../../utils/Queries';
import {api} from '../api';
import { CreateChildrenRequest } from './requests/createChildren.request';
import {GetAllChildrensReponse} from './responses/getAllChildrens.response';

export const getAll = (token: string, filters?: FiltersChildrenDTO): Promise<GetAllChildrensReponse> => {
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

export const create = (token: string, payload?: CreateChildrenRequest): Promise<ChildrenDTO> => {


  return new Promise((resolve, reject) => {
    api
      .post<ChildrenDTO>('/api/childrens', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => resolve(response.data))
      .catch((error: any) => reject(error));
  });
};
