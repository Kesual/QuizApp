import {Answer} from './Answer';
import {QuestionType} from './QuestionType';

export interface Question {
  id;
  value;
  answer: Answer[];
  questionType: QuestionType;
}
