import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http, Headers, RequestOptions, HTTP_PROVIDERS } from 'angular2/http';
import { NgIf } from 'angular2/common';
import { Observable } from 'rxjs/Rx';

import { HomeComponent } from '../home/home';
import { LoginComponent } from '../login/login';
import { LogoutComponent } from '../logout/logout';
import { DashboardComponent } from '../dashboard/dashboard';
import { ProfileComponent } from '../profile/profile';
import { POSTouchComponent } from '../posTouch/posTouch';


@Component({
  selector: 'app',
  templateUrl: 'app/app/app.html',
  directives: [
      ROUTER_DIRECTIVES,
      NgIf
  ],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
  ]
})
@RouteConfig([{ path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
              { path: '/login', name: 'Login', component: LoginComponent },
              { path: '/logout', name: 'Logout', component: LogoutComponent },
              { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
              { path: '/profile', name: 'Profile', component: ProfileComponent },
              { path: '/posTouch', name: 'POSTouch', component: POSTouchComponent }
])
export class App {
    public profile : string;
    public login : boolean;
    public time : string;
    
    constructor (_http: Http) {
        localStorage.setItem('api_url', 'http://192.168.1.152:81');
        
        if (!localStorage.getItem('access_token')) {
            this.profile = " "
            this.login = false;
        } else {
            var date = new Date();
            this.time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
            
            this.profile = localStorage.getItem('userName').toUpperCase();
            this.login = true;        
        }    
    }
    
    ngOnInit(){
        let clock = Observable.timer(2000,1000);
        clock.subscribe(t => this.timer(t));
    }
    
    timer(tick) {
        var date = new Date();
        this.time = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
}