import {Answer} from './Answer';
import {QuestionType} from './QuestionType';

export class Question {
  id;
  value;
  answer: Answer[];
  type: QuestionType;
}
