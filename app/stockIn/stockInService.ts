import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StockInComponent} from './stockIn';
import {Response} from '../response/response';

@Injectable()
export class StockInService {
    private static API_URL_STOCK_IN : string = "/api/transaction/stockIn/";

    public constructor(private http : Http) {}

    public listStockIn(component : StockInComponent) : void {
        const url = localStorage.getItem('api_url') + StockInService. API_URL_STOCK_IN + "list";
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