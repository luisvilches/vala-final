import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-home',
  templateUrl: './pricing-home.component.html',
  styleUrls: ['./pricing-home.component.css']
})
export class PricingHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open(){
    var x = document.querySelector(".modal");
    x.classList.remove('hide') 
  }
}
