import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
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

  public goalDate: NgbDateStruct;
  public curChapter: number;
  public selectedBookTitle: String;
  public selectedBook: Book;
  public supported: String[] = SUPPORTED;

  constructor(
    private calendar: NgbCalendar,
    private localstorageService: LocalstorageService,
    private readingDataService: ReadingDataService
  ) { }

  ngOnInit() {
    // this.readingDataService.progress.subscribe((progress: IBookProgress[]) => {
    //   console.log(progress);
    // });
    this.selectedBookTitle = this.localstorageService.get('selectedBookTitle') || BOM.title;
    this.loadSelectedBookData(this.selectedBook);
  }

  loadSelectedBookData(selectedBookTitle: String) {
    this.goalDate = this.readingDataService.getGoalDate(this.selectedBookTitle);
    this.selectedBook = new Book(BOOKINFO[this.selectedBookTitle]);
    this.curChapter = this.readingDataService.getCurChapter(this.selectedBookTitle);
  }

  onDateSelect(pickedDate: NgbDateStruct) {
    this.readingDataService.setGoalDate(pickedDate, this.selectedBookTitle);
  }

  onClearApp() {
    this.localstorageService.resetApp();
    location.reload();
  }

  selectToday() {
    this.goalDate = this.calendar.getToday();
    this.onDateSelect(this.goalDate);
  }

  selectBook(bookTitle: String) {
    this.selectedBookTitle = bookTitle;
    this.localstorageService.set('selectedBookTitle', bookTitle);
    this.loadSelectedBookData(this.selectedBookTitle);
  }

}
