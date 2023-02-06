import {api} from '../api';
import { UserLoginRequest } from './requests/userLogin.request';
import { LoggedUserResponse } from './responses/loggedUser.response';

export const signInRequest = (payload: UserLoginRequest): Promise<LoggedUserResponse> => {

  return new Promise((resolve, reject) => {
    api
      .post<LoggedUserResponse>('/api/auth/users/signin', payload)
      .then(response => resolve(response.data))
      .catch((error: any) => reject(error));
  });
};
