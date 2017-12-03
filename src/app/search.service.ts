import { Injectable } from '@angular/core';

import { TimetableResult } from './timetableResult';
import { SzegedToBudapest, 
  SzegedToKecskemét, 
  KecskemétToBudapest, 
  KecskemétToSzeged, 
  BudapestToKecskemét, 
  BudapestToSzeged } from './results';


@Injectable()
export class SearchService {

  constructor( ) { }

  /** Menetrend listázása paraméterek alapján*/
  getTimetable(from: string, to: string, date: string): TimetableResult[] {
    console.log("getTimetable: "+from+" "+to+" "+" "+date);
    if (from == "Szeged" && to == "Budapest") {
      return SzegedToBudapest;
    } else if (from == "Szeged" && to == "Kecskemét"){
      return SzegedToKecskemét;
    } else if (from == "Kecskemét" && to == "Budapest"){
      return KecskemétToBudapest;
    } else if (from == "Kecskemét" && to == "Szeged"){
      return KecskemétToSzeged;
    } else if (from == "Budapest" && to == "Szeged"){
      return BudapestToSzeged;
    } else if (from == "Budapest" && to == "Kecskemét"){
      return BudapestToKecskemét;
    }
  }
  /** Email kiküldés sikeres*/
  sendMail(name:string, email:string, message: string) : boolean{
    return true;
  }

}