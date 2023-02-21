import { CreateResponsibleInterface } from "../../../interfaces/responsibles/createResponsible.interface";

export interface CreateChildrenRequest {
  name: string;
  birthDate: Date;
  observations: string;
  responsibles: CreateResponsibleInterface[];
}