import {api} from '../api';
import {RegisterPointRequest} from './request/registerPoints.request';
import {GetAllCultsReponse} from './responses/getAllCults.response';
import {RegisterPointsResponse} from './responses/registerPoints.response';

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

export const registerPoints = (
  cultId: string,
  childrenId: string,
  token: string,
  payload: RegisterPointRequest,
): Promise<RegisterPointsResponse> => {
  return new Promise((resolve, reject) => {
    api
      .post<RegisterPointsResponse>(
        `/api/cults/${cultId}/childrens/${childrenId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => resolve(response.data))
      .catch((error: any) => reject(error));
  });
};
