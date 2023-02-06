import {
  differenceInCalendarYears,
  differenceInYears,
  formatRelative,
  intervalToDuration,
  parse,
  subDays,
} from 'date-fns';
import {formatWithOptions} from 'date-fns/fp';
import {ptBR} from 'date-fns/locale';

export function getWeekDay(date: Date): string {
  return formatWithOptions({locale: ptBR}, 'eeee ', new Date(date));
}

export function getDayAndMonth(date: Date): string {
  return formatWithOptions({locale: ptBR}, 'ddMMM', new Date(date));
}

export function calculateAge(birthDate: Date): string {
  const age = differenceInYears(new Date(), new Date(birthDate));

  return `${age} anos`;
}
