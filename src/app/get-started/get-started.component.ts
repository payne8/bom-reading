import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private storage: LocalstorageService) { }

  ngOnInit() {
    let goalDate = this.storage.get('goalDate');
    if (goalDate) {

    }
  }

  onDateSelect(pickedDate: NgbDateStruct) {
    this.storage.set('goalDate', pickedDate);
  }

}
