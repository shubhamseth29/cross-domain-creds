import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Marketplace Portal';

  @HostListener('window:message', ['$event'])
  onMessage(e) {
    if (e.origin == environment.customerURL) {
      if(e.data.purpose && e.data.purpose === 'logout'){
        localStorage.clear();
        this.router.navigate(['/login'], {});

      }
      else {
        localStorage.setItem('marketplace.centilytics.com', JSON.stringify(e.data));
      }
    } else {
      return false;
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }
}
