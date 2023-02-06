import {FiltersChildrenDTO} from '../interfaces/children/filtersChildren.interface';

interface IFields {
  name: () => string;
  birthDate: () => string;
  observations: () => string;
  responsible: () => string;
}

type TFilds = 'name' | 'birthDate' | 'observations' | 'responsible';

export function generateQueryForChildrens(
  baseResource: string,
  filters: FiltersChildrenDTO,
): string {

  const fields: IFields = {
    name: () => `name=${filters.name}`,
    birthDate: () => `birthDate=${filters.birthDate}`,
    observations: () => `observations=${filters.observations}`,
    responsible: () => `responsible=${filters.responsible}`,
  };

  const keysFields: TFilds[] = Object.keys(fields) as TFilds[];

  let query: string = '';

  let queryBuilder: () => string;

  for (const filter in filters) {
    if (keysFields.includes(filter as TFilds)) {
      queryBuilder = fields[filter as TFilds];

      if (query !== '') {
        const newCondition: string = `&${queryBuilder()}`;

        query.concat(newCondition);
      } else {
        query = `${baseResource}?${queryBuilder()}`;
      }
    }
  }

  return query;
}
