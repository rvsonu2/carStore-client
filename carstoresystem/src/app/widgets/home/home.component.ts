import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

   }

  materlizeView(){
    const slider:any=document.querySelectorAll('.slider');
    var sliderInstance = M.Slider.init(slider, {});
  }

  ngOnInit(): void {
    this.materlizeView();
  }

}
