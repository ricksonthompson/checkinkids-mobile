import { EStatusCult, EShiftCult } from "../../utils/ETypes";
import { Responsible } from "../responsibles/responsible.interface";

export interface ICult {
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