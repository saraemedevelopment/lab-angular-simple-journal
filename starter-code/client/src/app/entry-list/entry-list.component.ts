import { Component, OnInit } from '@angular/core';
import {EntryService} from '../services/service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
entries:any;
  constructor(public entryService:EntryService) {

  }

  ngOnInit() {
    this.entryService.getEntryList().subscribe( list =>{
      console.log(list);
      this.entries = list;
    });
  }

}
