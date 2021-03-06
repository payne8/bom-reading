import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { LocalstorageService } from './localstorage.service';
import { IBook, IBookPart, IBookProgress } from './DataStructure';
import { BOM, SUPPORTED, Book } from './books/books';

@Injectable({
  providedIn: 'root'
})
export class ReadingDataService {

  private _books$: Subject<IBook[]>;
  private _progress$: Subject<IBookProgress[]>;
  private _progress: IBookProgress[];

  constructor(private storage: LocalstorageService) {
    this._books$ = new Subject<IBook[]>();
    this._progress$ = new Subject<IBookProgress[]>();
    this.setupProgress();
  }

  get books() {
    return this._books$.asObservable();
  }

  get progress() {
    return this._progress$.asObservable();
  }

  private setupProgress() {
    let self = this;
    let progress: IBookProgress[] = this.storage.get('progress') || [];
    let currentProgressKeys = progress.map(bookProgress => bookProgress.key);
    for (let i in SUPPORTED) {
      let supportedBookKey = SUPPORTED[i].key;
      if (currentProgressKeys.indexOf(supportedBookKey) === -1) {
        progress.push({
          key: supportedBookKey,
          curChapter: 0,
          goalDate: {
            year: new Date().getFullYear(),
            month: 12,
            day: 31
          },
          startDate: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
          }
        });
      }
    }
    this.storage.set('progress', progress);

    this._progress$.subscribe((nextProgress: IBookProgress[]) => {
      self._progress = nextProgress;
      this.storage.set('progress', nextProgress);
    });
    this._progress$.next(progress);
  }

  public getGoalDate(bookKey: string=BOM.title) {
    return this.retriveRequestedBookProperty(bookKey, 'goalDate');
  }

  public setGoalDate(newGoalDate: NgbDateStruct, bookKey: string=BOM.title) {
    this.setRequestedBookProperty(bookKey, 'goalDate', newGoalDate);
  }

  public getStartDate(bookKey: string=BOM.title) {
    return this.retriveRequestedBookProperty(bookKey, 'startDate');
  }

  public setStartDate(newStartDate: NgbDateStruct, bookKey: string=BOM.title) {
    this.setRequestedBookProperty(bookKey, 'startDate', newStartDate);
  }

  public getCurChapter(bookKey: string=BOM.title) {
    return this.retriveRequestedBookProperty(bookKey, 'curChapter');
  }

  public setCurChapter(newCurChapter: number, bookKey: string=BOM.title) {
    return this.setRequestedBookProperty(bookKey, 'curChapter', newCurChapter);
  }

  public getReadingDates(startDate: NgbDate, goalDate: NgbDate, book: Book) {
    let oneDay: number = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let startDateObj: Date = new Date(startDate.year, startDate.month - 1, startDate.day);
    let goalDateObj: Date = new Date(goalDate.year, goalDate.month - 1, goalDate.day);
    let diffDays: number = Math.round(Math.abs((startDateObj.getTime() - goalDateObj.getTime())/(oneDay)));
    let chaptersPerDay: number;
    if (diffDays !== 0) {
      chaptersPerDay = book.totalChapterCount / diffDays;
    } else {
      chaptersPerDay = book.totalChapterCount;
    }
    let readingDates = [];
    let curChapter: number = 1;
    for (var d = new Date(startDateObj); d <= goalDateObj; d.setDate(d.getDate() + 1)) {

      let readingDate = {
        date: {
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          day: d.getDate(),
        },
        chapters: book.getChaptersFromPosition(curChapter, chaptersPerDay)
      };
      readingDates.push(readingDate);
      curChapter = curChapter + chaptersPerDay;
    }
    return readingDates;
  }

  private retriveRequestedBookProperty(bookKey: string, property: string) {
    let requestedBook: IBookProgress = this._progress.find((bookProgress: IBookProgress) => {
      return bookProgress.key === bookKey;
    });
    if (requestedBook) {
      return requestedBook[property];
    }
  }

  private setRequestedBookProperty(bookKey: string, property: string, value: any) {
    let requestedBook: IBookProgress = this._progress.find((bookProgress: IBookProgress) => {
      return bookProgress.key === bookKey;
    });
    if (requestedBook) {
      requestedBook[property] = value;
    }
    this._progress$.next(this._progress);
  }
}
