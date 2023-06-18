import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carstoresystem';

  constructor(){
    document.addEventListener('DOMContentLoaded', function() {
      var nav = document.querySelectorAll('.sidenav');
      var navInsance = M.Sidenav.init(nav, {});

      var slider = document.querySelectorAll('.slider');
      var sliderInstance = M.Slider.init(slider, {});
    });
  }
}
