import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {CollectionComponent} from './collection';
import {Response} from '../response/response';

@Injectable()
export class CollectionService {
    private static API_URL_COLLECTION : string = "/api/transaction/collection/"; 

    constructor(private _http : Http) {
    }

    public listCollection(component : CollectionComponent) : void{
        const url = localStorage.getItem('api_url') + CollectionService.API_URL_COLLECTION + "list";
        const header = new Headers({'Authorization' : 'Bearer' + localStorage.getItem('access_token')});
        const option = new RequestOptions({headers : header});

        this._http.get(url, option)
            .subscribe(
                response => {
                    switch(response.status) {
                        case Response.SUCCESS: 
                            component.getCollectionView().sourceCollection = response.json();
                            this.checkPageCount(component.getCollectionView());
                            break;
                    }
                },
                error => {
                    component.getToastr().error('Server error');
                }
            );
    }

    public addCollection(data, component : CollectionComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        header.append('Content-Type', 'application/json');
        const option = new RequestOptions({headers : header});

      
    } 

    public updateCollection(data, component : CollectionComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        header.append('Content-Type', 'application/json');
        const option = new RequestOptions({headers : header});

      
    }

    public deleteCollection(data, component : CollectionComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const option = new RequestOptions({headers : header});

    
    }

    private checkPageCount(collectionView: wijmo.collections.CollectionView) : void {
        if(collectionView.pageCount == 1 || collectionView.itemCount == 0){
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        else {
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}