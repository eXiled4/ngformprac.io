import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName: string;
  customerEmail: string;
  customerUserName: string;
  customerPassword: string;

  // First import NgForm after globally importing FormsModule to access all of form methods eg onSubmit as below

  constructor() { }

  onSubmit(form: NgForm){
    console.log(form.value)
  }

  ngOnInit(): void {
  }

}
