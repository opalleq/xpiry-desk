export interface Category {
  name: string;
  value: string;
}

export enum PeriodTypes {
  DAY = 'Days',
  MONTH = 'Months',
  YEAR = 'Years'
}

export type PeriodType = keyof typeof PeriodTypes;

export interface FormState {
  name?: string;
  category?: string;
  expirationDate?: string;
  productionDate?: string;
  period?: number;
  periodType?: string;
  isEdit?: boolean;
}

export const getEnumKeys = <T extends Object>(e: T): Array<keyof typeof e> => {
  return Object.keys(e) as Array<keyof typeof e>;
};

export interface RootState {
  form: Item,
  items: Item[]
}

export interface Item {
  id?: number;
  name?: string;
  category?: string;
  productionDate?: string;
  expirationDate?: string;
  period?: number;
  periodType?: string;
  isEdit?: boolean;
}