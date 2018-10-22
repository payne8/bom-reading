import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

interface IBookPart {
  name: string;
  chapters: number;
  chapterArray?: number[];
}

interface IBook {
  key: string;
  title: string;
  parts: IBookPart[];
}

interface IBookProgress {
  key: string;
  curChapter: number;
  goalDate: NgbDateStruct;
  startDate: NgbDateStruct;
}

interface IKeyLabel {
  key: string;
  label: string;
}

interface IChapter {
  partName: string;
  chapter: number;
}

export {
  IBook,
  IBookPart,
  IBookProgress,
  IChapter,
  IKeyLabel
}
