import { EUserType } from "../../../utils/ETypes";

export interface LoggedUserResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  profileUrl?: string;
  type: EUserType;
  token: string;
  createdAt: Date;
  updatedAt?: Date;
}