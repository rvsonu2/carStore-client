import { Component } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carstoresystem';
  index:boolean=true;

  constructor(private route:Router){
    this.materlizeView();
  }
  materlizeView(){
    debugger
    document.addEventListener('DOMContentLoaded', function() {
      var nav = document.querySelectorAll('.sidenav');
      var navInsance = M.Sidenav.init(nav, {});

      // var slider = document.querySelectorAll('.slider');
      // var sliderInstance = M.Slider.init(slider, {});
    });
  }
  home(){
    this.materlizeView();
    this.index=true;
    this.route.navigateByUrl("/");
  }
  login(){
    this.index=false;
    this.route.navigateByUrl("/login");
  }
}
