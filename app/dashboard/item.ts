import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

import {ItemListComponent} from './itemList';

@Component({
    selector: 'item',
    templateUrl: 'app/dashboard/itemList.html'
})

@RouteConfig(
    [
        {path: '/itemList', name :"ItemList", component: ItemListComponent, useAsDefault: true}
    ]
)

export class ItemComponent{

    constructor(private router: Router){
    }
}