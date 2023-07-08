import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Toast } from 'materialize-css';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  role: any;
  imgURL:any;
  password1: any;
  password2: any;
  roles = [
    {
      role: "Employee"
    },
    {
      role: "Manager"
    }
  ];
  selectedPic: any;
  constructor(private httpClient:HttpClient,private toast:Toast) {
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }

  onSelectRole(event: any) {
    debugger
    this.user.role = event.target.value;
  }

  registration(){
    debugger
    this.user.photos = new FormData();
    this.user.photos.append('myFile',this.selectedPic,this.selectedPic.name);
    this.httpClient.post('api/employee/registration', this.user, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          M.toast({html: 'Image uploaded successfully'});
        } else {
          M.toast({html: 'Image uploaded Unsuccessfully'});
        }
      }
      );
  }

  // url: string | null | ArrayBuffer = './assets/banner1.jpg'
  onFileSelected(e:any) {
    this.selectedPic=e.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event)=>{
      this.imgURL=reader.result;
    }
  }

}
