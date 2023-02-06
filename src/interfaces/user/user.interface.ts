import {EUserType} from '../../utils/ETypes';

export interface IUser {
  id: string;
  name: string;
  phone: string;
  email: string;
  profileUrl?: string;
  type: EUserType;
  token: string;
}
