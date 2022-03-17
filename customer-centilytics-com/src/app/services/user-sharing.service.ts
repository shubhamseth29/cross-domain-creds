import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable()
export class UserSharingService {

    private userStorage;
    constructor() {
        this.userStorage = JSON.parse(localStorage.getItem('customer.centilytics.com'));
    }

    postCrossDomainMessage(purpose, portal = 'marketplace') {
        let postURL: any;
        let iframeId: any;
        if (portal === 'marketplace') {
            postURL = environment.customerURL;
            iframeId = 'marketplace-ifr';
        }
        const iframe = document.getElementById(iframeId);
        if (iframe == null) {
          return;
        }
        const iWindow = (iframe as HTMLIFrameElement).contentWindow;
        const storageData = {
          data: this.userStorage,
          purpose
        }
        console.log(storageData);
        setTimeout(function () {
            iWindow.postMessage(storageData, environment.marketplaceURL);
        }, 1000);
    }

}
