import { Component, OnInit } from '@angular/core';
import {EntryService} from '../services/service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {


  entry:any;
  constructor(
    public router:Router,
    public entryService:EntryService,
    public route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.entryService.getEntryByID(params['id'])
        .subscribe(entry => this.entry = entry);
    })
};


  ngOnInit() {
  };

}
