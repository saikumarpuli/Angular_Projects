import {Component, Input, OnInit} from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(protected localStorage: LocalStorage) {}
  @Input() records: string;
  ngOnInit() {
    this.localStorage.setItem('note', JSON.stringify(this.records)).subscribe(() => {});
    console.log((this.records));
  }



}
