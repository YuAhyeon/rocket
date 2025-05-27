import { Data } from '../types';

export const user = {
  name: '김로켓',
  birth: '1980-08-27T08:10:00.000Z',
};

export const columnHead = ['', '時', '日', '月', '年'];

export const rowHead = [
  ['十星', '십성'],
  ['天干', '천간'],
  ['地支', '지지'],
  ['十星', '십성'],
  ['十二運星', '십이운성'],
  ['十二神殺', '십이신살'],
  ['貴人', '귀인'],
];

export const data: Data[] = [
  {
    type: 'sib',
    hour: ['傷官', '상관'],
    day: ['比肩', '비견'],
    month: ['傷官', '상관'],
    year: ['傷官', '상관'],
  },
  {
    type: 'gan',
    hour: ['壬', '임', '陽水'],
    day: ['丁', '정', '陰火'],
    month: ['癸', '계', '陰水'],
    year: ['丁', '정', '陰火'],
  },
  {
    type: 'ji',
    hour: ['寅', '인', '陽木'],
    day: ['巳', '사', '陰火'],
    month: ['亥', '해', '陰水'],
    year: ['酉', '유', '陰金'],
  },
  {
    type: 'jiSib',
    hour: ['比肩', '비견'],
    day: ['劫財', '겁재'],
    month: ['食神', '식신'],
    year: ['偏財', '편재'],
  },
  {
    type: 'un',
    hour: ['死', '사'],
    day: ['帝旺', '제왕'],
    month: ['胎', '태'],
    year: ['長生', '장생'],
  },
  {
    type: 'sal',
    hour: ['劫殺', '겁살'],
    day: ['地殺', '지살'],
    month: ['驛馬殺', '역마살'],
    year: ['將星殺', '장성살'],
  },
  {
    type: 'gwi',
    hour: null,
    day: null,
    month: ['天乙', '천을귀인'],
    year: [
      ['天乙', '천을귀인'],
      ['太極', '태극귀인'],
      ['文昌', '문창귀인'],
    ],
  },
];
