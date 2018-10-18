import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface IBookPart {
  name: string;
  chapters: number;
}

interface IBook {
  title: string;
  parts: IBookPart[];

}

interface IBookProgress {
  title: string;
  curChapter: number;
  goalDate: NgbDateStruct;
}

export {
  IBook,
  IBookPart,
  IBookProgress
}
