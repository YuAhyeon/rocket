export type NormalRow = {
  type: string;
  hour: string[];
  day: string[];
  month: string[];
  year: string[];
};

export type GwiRow = {
  type: 'gwi';
  hour: null;
  day: null;
  month: string[];
  year: string[][];
};

export type Data = NormalRow | GwiRow;
