import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName;
  userPassword;
  errorMessage :string;

  constructor(
    private zone:NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    let userLoginData = JSON.parse(localStorage.getItem("marketplace.centilytics.com"));
    if(userLoginData){
      this.router.navigate(['/dashboard'], {});
    }
  }

  doLogin(){
    this.errorMessage = '';

    if(this.userName == 'centilytics' && this.userPassword == 'Centilytics@123'){
      let userData = {
        'username' :"centilytics"
      }
      localStorage.setItem("marketplace.centilytics.com", JSON.stringify(userData));
      this.zone.run(() => {
        this.router.navigate(['/dashboard'], {});
      })
    }
    else{
      this.errorMessage = " Bhai kya kar raha hai tu ? Firse Daal ! ";
    }

  }


}
