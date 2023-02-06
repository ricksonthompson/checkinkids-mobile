import { Responsible } from "../../../interfaces/responsibles/responsible.interface";
import { EShiftCult, EStatusCult } from "../../../utils/ETypes";

export interface RegisterPointsResponse {
  id: string;
  title: string;
  date: Date;
  time: string;
  status: EStatusCult;
  shift: EShiftCult;
  childrens: {
    id: string;
    name: string;
    birthDate: Date;
    observations: string;
    responsibles: Responsible[];
    verse?: boolean;
    meditation?: boolean;
    attendance?: boolean;
    isInvited?: boolean;
    updatedAt: Date;
  }[];
  createdAt: Date;
}