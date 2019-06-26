import { Component } from '@angular/core';
import {FormBuilder,Validators, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Form';

   data=[]

  personsForms
  constructor(public formBuilder: FormBuilder){
              this.personsForms = formBuilder.group({
    LastName: ["", Validators.required],
    FirstName: ["" , Validators.required],
    Age: ["", Validators.required],
    email: ["", Validators.email],
    number: ["", Validators.required]
})
  }
  saveInfo(){
  this.data.push({
    LastName:this.personsForms.value.LastName,
    FirstName:this.personsForms.value.FirstName,
    Age:this.personsForms.value.Age,
    email:this.personsForms.value.email,
    number:this.personsForms.value.number
  })
    
  
  }

  
}
