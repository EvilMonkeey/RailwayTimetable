import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  model = {name:"",email:"",message:""};
  constructor(private searchService: SearchService) { }

    onSubmit() {
      //ha sikeres az üzenetküldés akkor visszajelzést kap a felhasználó
      if(this.searchService.sendMail(this.model.name,this.model.email,this.model.message)){
        alert("Köszönjük visszajelzését!");
      }
    }

}
