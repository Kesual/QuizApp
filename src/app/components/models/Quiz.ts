import {Question} from './Question';

export interface Quiz {
  id;
  name;
  question: Question[];
}
