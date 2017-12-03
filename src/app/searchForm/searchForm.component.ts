import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableInfos } from '../timetableInfos';

@Component({
  selector: 'app-search',
  templateUrl: './searchForm.component.html',
  styleUrls: ['./searchForm.component.css']
})
export class SearchFormComponent {
  constructor(
    private router: Router
  ) { }

  places = ['Szeged', 'Kecskemét', 'Budapest'];
  model = new TimetableInfos("", "", '2017.12.03.');

  onSubmit() {
    //ha a kiindulási pont nem egyezik meg a végponttal, akkor timetable oldalra navigáljuk a felhasználót, URL-ben átadjuk a paramétereket.
    if (this.model.from != this.model.to) {
      this.router.navigate(['/timetable/', this.model.from, this.model.to, this.model.date]);
    }
  }

}
