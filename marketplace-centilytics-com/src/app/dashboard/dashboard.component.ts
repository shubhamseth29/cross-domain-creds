import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    let userLoginData = JSON.parse(localStorage.getItem("marketplace.centilytics.com"));
    if(!userLoginData){
      this.router.navigate(['/login'], {});
    }
  }

}
