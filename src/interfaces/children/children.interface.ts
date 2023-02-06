import {Responsible} from '../responsibles/responsible.interface';

export interface ChildrenDTO {
  id: string;
  name: string;
  birthDate: Date;
  observations: string;
  responsibles: Responsible[];
  createdAt: Date;
}
