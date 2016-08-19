import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {RestaurantTablesComponent} from './restaurantTables';
import {Response} from '../response/response';

@Injectable()
export class RestaurantTableService {
    private static API_URL_RESTAURANT_TABLE : string = "/api/tableGroup/";

    public constructor(private http : Http) {}

    public listRestaurantTables(component : RestaurantTablesComponent) : void {
        const url = localStorage.getItem('api_url') + RestaurantTableService.API_URL_RESTAURANT_TABLE  + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const requestOptions = new RequestOptions();

        this.http.get(url, requestOptions)
                 .subscribe(
                     response=> {
                         switch(response.status) {
                             case Response.SUCCESS: 
                                    component.getCollectionView().sourceCollection = response.json();
                                    this.checkPageCount(component.getCollectionView());
                                    break;
                             default: break;
                         }
                     },
                     error => {
                         component.getToastr().error('Server error');
                     }
                )
    }

    private checkPageCount(collectionView: wijmo.collections.CollectionView) : void {
        if(collectionView.pageCount == 1 || collectionView.itemCount == 0){
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
    }
}