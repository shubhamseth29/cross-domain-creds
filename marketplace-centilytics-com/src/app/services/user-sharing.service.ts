import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class UserSharingService {
  private userStorage;
  constructor() {
    this.userStorage = JSON.parse(localStorage.getItem('customer.centilytics.com'));
   }

   postCrossDomainMessage(link, portal='customer') {
    let postURL: any;
    let iframeId:any;
    if(portal == 'customer'){
        postURL =  environment.customerURL;
        iframeId = 'customer-ifr';
    }
    var iframe = document.getElementById(iframeId);
    if (iframe == null) return;
    var iWindow = (<HTMLIFrameElement>iframe).contentWindow;
    const linkURL = postURL + link;
    window.open(linkURL, '_blank');
    const storageData = this.userStorage;
    iWindow.postMessage(storageData, postURL);
  }

}
