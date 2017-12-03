import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortByPipe } from '../sortBy.pipe';
import { SearchService } from '../search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TimetableComponent,SortByPipe],
  exports: [TimetableComponent]
})
export class TimetableModule { }
