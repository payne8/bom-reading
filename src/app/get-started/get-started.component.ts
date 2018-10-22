import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { LocalstorageService } from '../localstorage.service';
import { ReadingDataService } from '../reading-data.service';
import { IBook, IBookProgress } from '../DataStructure';
import { BOM, SUPPORTED, BOOKINFO, Book } from '../books/books';
declare var location;

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  public startDate: NgbDate;
  public goalDate: NgbDate;
  public curChapter: number;
  public selectedBookKey: string;
  public selectedBook: Book;
  public supported: {key:string,label:string}[] = SUPPORTED;
  public minEndDate: NgbDate;

  constructor(
    private calendar: NgbCalendar,
    private localstorageService: LocalstorageService,
    private readingDataService: ReadingDataService
  ) {
    this. minEndDate = NgbDate.from({
     year: new Date().getFullYear(),
     month: new Date().getMonth() + 1,
     day: new Date().getDate(),
    });
  }

  ngOnInit() {
    this.selectedBookKey = this.localstorageService.get('selectedBookKey') || BOM.key;
    this.loadSelectedBookData(this.selectedBookKey);
  }

  loadSelectedBookData(selectedBookKey: string) {
    this.startDate = NgbDate.from(this.readingDataService.getStartDate(this.selectedBookKey));
    this.goalDate = NgbDate.from(this.readingDataService.getGoalDate(this.selectedBookKey));
    this.selectedBook = new Book(BOOKINFO[this.selectedBookKey]);
    this.curChapter = this.readingDataService.getCurChapter(this.selectedBookKey);
  }

  onDateSelect(pickedDate: NgbDate) {
    let newDate: NgbDate;
    if (pickedDate.before(this.startDate)) {
      this.readingDataService.setGoalDate(this.startDate, this.selectedBookKey);
      newDate = NgbDate.from(this.startDate);
    } else {
      this.readingDataService.setGoalDate(pickedDate, this.selectedBookKey);
      newDate = NgbDate.from(pickedDate);
    }
    this.goalDate = newDate;
  }

  onStartDateSelect(pickedDate: NgbDate) {
    let newDate: NgbDate;
    if (pickedDate.after(this.goalDate)) {
      this.readingDataService.setStartDate(this.goalDate, this.selectedBookKey);
      newDate = NgbDate.from(this.goalDate);
    } else {
      this.readingDataService.setStartDate(pickedDate, this.selectedBookKey);
      newDate = NgbDate.from(pickedDate);
    }
    this.startDate = newDate;
  }

  onClearApp() {
    this.localstorageService.resetApp();
    location.reload();
  }

  selectToday() {
    this.onDateSelect(this.goalDate);
  }

  selectTodayStart() {
    this.onStartDateSelect(this.goalDate);
  }

  selectBook(bookKey: string) {
    this.selectedBookKey = bookKey;
    this.localstorageService.set('selectedBookKey', bookKey);
    this.loadSelectedBookData(this.selectedBookKey);
  }

  setProgress(curPosition: number) {
    this.readingDataService.setCurChapter(curPosition, this.selectedBookKey);
    this.curChapter = curPosition;
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

}
