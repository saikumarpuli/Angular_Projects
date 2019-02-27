import {Component, OnInit} from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filterPipe: FilterPipe, protected localStorage: LocalStorage) {
    console.log(filterPipe.transform(this.records, {name: 'M'}));
    this.localStorage.getItem('user').subscribe((records) => {
       console.log(this.records);
    });
  }

  time: any = new Date().toLocaleTimeString();
  staicnote = this.time + '|' + 'This is a static text for the notes';
  notes: any;
  userFilter: any = {name: ''};
  records = new Array(' ');
  date = new Date().toLocaleString();
  i: number;

  save() {
    this.records[this.records.length] = this.notes;
    this.records[this.records.length] = this.staicnote;
    this.notes = '';
    this.localStorage.setItem('note', JSON.stringify(this.records)).subscribe(() => {});

  }

  touch(note) {
    this.notes = note;
  }

  delete() {
    for (this.i = 0; this.i < this.records.length; this.i++) {
      if (this.records[this.i] === this.notes) {
        this.records.splice(this.i, 2);
        this.localStorage.setItem('note', JSON.stringify(this.records)).subscribe(() => {
        });

      }
    }
  }
}


