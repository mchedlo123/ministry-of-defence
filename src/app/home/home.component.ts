import { Component, OnInit } from '@angular/core';
import { countries } from '../shared/store/country-data-store';
import { FormGroup, FormControl, FormControlName } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm = new FormGroup({
    country: new FormControl(''),
    address: new FormControl(''),
    postcode: new FormControl(''),
    city: new FormControl(''),
    address2: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

  public countries:any = countries;

  constructor() { }

  ngOnInit(): void {
  }

  completeUser() {
    console.log(this.loginForm.value)
  }
}
