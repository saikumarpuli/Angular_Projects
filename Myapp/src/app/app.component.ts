import { Component } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: any;
  userFilter: any = { name: '' };
  constructor(private filterPipe: FilterPipe) {
    console.log(filterPipe.transform(this.records, { name: 'M'}));
  }
  records = new Array( ' ');
    date = new Date().toLocaleString();
   time: any = new Date().toLocaleTimeString();
   display = 'This is a static text for the notes';
    delete() {
    this.records.pop();
    this.records.pop();
    this.records.pop();

    }
  save() {
    this.records.push(this.notes);
    this.records.push(this.time);
    this.records.push(this.display);
    }
}
