import { Component, OnInit } from '@angular/core';
import { countries } from '../shared/store/country-data-store';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countries:any = countries;

  constructor() { }

  ngOnInit(): void {
  }

}
