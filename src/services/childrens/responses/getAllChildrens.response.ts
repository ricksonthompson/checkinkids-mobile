import { ChildrenDTO } from '../../../interfaces/children/children.interface';

export interface GetAllChildrensReponse {
  total: number;
  items: ChildrenDTO[];
}
