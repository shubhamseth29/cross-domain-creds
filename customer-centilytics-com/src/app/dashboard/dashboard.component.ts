import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserSharingService } from '../services/user-sharing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserSharingService]
})
export class DashboardComponent implements OnInit {

  constructor(private userSharingService: UserSharingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const iframe = document.createElement('IFRAME');
    iframe.id = 'marketplace-ifr';
    iframe.style.display = "none";
    (<HTMLIFrameElement>iframe).src = environment.marketplaceURL;
    document.body.appendChild(iframe);
    this.userSharingService.postCrossDomainMessage('login', 'marketplace');
  }

  doLogout(){
      localStorage.clear();
      this.router.navigate(['/login'], {});
      this.userSharingService.postCrossDomainMessage('logout', 'marketplace');
  }

}
