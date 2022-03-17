This is a demo application to show , how we can use same creds in our different domain websites to login and logout together from both domains together.

For example we have one website on domain customer.centilytics.com and other on marketplace.centilytics.com

We want , as the customer logs in customer portal , then customer also gets logged in market place and same happens on logout from customer portal.
This can be done using iFrame and window api postMessage , window.postMessage is used to post cross-origin messages with are otherwise not allowed due to same-site policy.

This is UI of customer portal login
![image](https://user-images.githubusercontent.com/32809078/158873411-6f9d6821-47bd-4cb9-8b2d-c1d751297077.png)

And this is UI of marketplace login
![image](https://user-images.githubusercontent.com/32809078/158873462-8e750955-ab13-4c69-b355-713b6826ad6e.png)


Now if I login on Customer portal , its dashboard opens
![image](https://user-images.githubusercontent.com/32809078/158873529-340bc453-c4d0-4efa-ba35-080a0e98aa95.png)


And if I go to my second domain or marketplace and just refresh the page or open that url again , it logs in itself and shows dashboard
![image](https://user-images.githubusercontent.com/32809078/158873615-62d3b10a-38df-4381-8dc3-88ffcd68cd63.png)

Both the creds are dummy creds that are being stored in Localstorage with key as their domain name
![image](https://user-images.githubusercontent.com/32809078/158873703-780a5601-fe50-47ef-b29b-e2e0b4154e47.png)

![image](https://user-images.githubusercontent.com/32809078/158873711-5b5262e3-e79d-4c4d-8077-4ccb883c40cc.png)
 
