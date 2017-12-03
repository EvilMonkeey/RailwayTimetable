import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { TimetableResult } from '../timetableResult';
import { Observable } from 'rxjs/Observable';
import { SzegedToBudapest } from '../results';
import {SortByPipe} from '../sortBy.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  data : TimetableResult[];
  constructor(private searchService: SearchService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    //URL címben kapott paraméterek alapján menetrend lekérdezés
    let from = this.route.snapshot.paramMap.get('from');
    let to = this.route.snapshot.paramMap.get('to');
    let date = this.route.snapshot.paramMap.get('date');
    this.data = this.searchService.getTimetable(from,to,date);
  }

}
