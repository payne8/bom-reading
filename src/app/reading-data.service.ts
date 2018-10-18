import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LocalstorageService } from './localstorage.service';
import { IBook, IBookPart, IBookProgress } from './DataStructure';
import { BOM, SUPPORTED } from './books/books';

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
    let currentProgressTitles = progress.map(bookProgress => bookProgress.title);
    for (let i in SUPPORTED) {
      let supportedBookTitle = SUPPORTED[i];
      if (currentProgressTitles.indexOf(supportedBookTitle) === -1) {
        progress.push({
          title: supportedBookTitle,
          curChapter: 0,
          goalDate: {
            year: new Date().getFullYear(),
            month: 12,
            day: 31
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

  public getGoalDate(bookTitle: String=BOM.title) {
    return this.retriveRequestedBookProperty(bookTitle, 'goalDate');
  }

  public setGoalDate(newGoalDate: NgbDateStruct, bookTitle: String=BOM.title) {
    this.setRequestedBookProperty(bookTitle, goalDate, newGoalDate);
  }

  public getCurChapter(bookTitle: String=BOM.title) {
    return this.retriveRequestedBookProperty(bookTitle, 'curChapter');
  }

  public setCurChapter(newCurChapter: number, bookTitle: String=BOM.title) {
    return this.setRequestedBookProperty(bookTitle, 'curChapter', newCurChapter);
  }

  private retriveRequestedBookProperty(bookTitle: String, property: String) {
    let requestedBook: IBookProgress = this._progress.find((bookProgress: IBookProgress) => {
      return bookProgress.title === bookTitle;
    });
    if (requestedBook) {
      return requestedBook[property];
    }
  }

  private setRequestedBookProperty(bookTitle: String, property: String, value: any) {
    let requestedBook: IBookProgress = this._progress.find((bookProgress: IBookProgress) => {
      return bookProgress.title === bookTitle;
    });
    if (requestedBook) {
      requestedBook[property] = value;
    }
    this._progress$.next(this._progress);
  }
}
