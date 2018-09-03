import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var btn = document.querySelector(".grid-button");
    var grid = document.querySelector(".grid");
    var list = document.querySelector(".list");
    var items = document.querySelectorAll(".list a");

    btn.addEventListener("click", function(){
      if(grid.classList.contains("open")){
        grid.classList.remove("open");
        grid.classList.add("close");
        list.classList.add("menuMobile");
      } else {
        grid.classList.add("open");
        grid.classList.remove("close");
        list.classList.remove("menuMobile");
      }
    });

    for(var i = 0; i < items.length;i++){
      items[i].addEventListener("click", function(){
        list.classList.remove("menuMobile");
        grid.classList.add("open");
        grid.classList.remove("close");
      })
    }
  }

  open(){
    var x = document.querySelector(".modal");
    x.classList.remove('hide') 
  }

}
