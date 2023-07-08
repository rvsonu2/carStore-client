import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {});
    });
  }

  ngOnInit(): void {
  }

}
