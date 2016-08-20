import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {CollectionComponent} from './collection';
import {Response} from '../response/response';

@Injectable()
export class CollectionService {
    private static API_COLLECTION_URL : string = "/api/transaction/collection/"; 

    constructor(private _http : Http) {
    }

    public listCollection(component : CollectionComponent) : void{
        const url = localStorage.getItem('api_url') + CollectionService.API_COLLECTION_URL + "list";
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

    } 

    public updateCollection(data, component : CollectionComponent) : void {
      
    }

    public deleteCollection(data, component : CollectionComponent) : void {
        const url : string = localStorage.getItem('api_url') + CollectionService.API_COLLECTION_URL + "delete";
        const headers = new Headers(
            {
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
            }
        );
        const requestOptions = new RequestOptions(
            {
                headers : headers,
                body : JSON.stringify(data)
            }
        );

        this._http.delete(url, requestOptions)
                  .subscribe(
                      response => {
                          switch(response.status) {
                                case Response.SUCCESS:
                                    component.getToastr().success('Deleted successfully');
                                    this.listCollection(component);
                                    break;
                                default: break;
                          }
                      },
                      error => {
                          component.getToastr().error('Server error');
                      }
                  );
    }

    private checkPageCount(collectionView: wijmo.collections.CollectionView) : void {
        if(collectionView.pageCount == 1 || collectionView.itemCount == 0){
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    }
}