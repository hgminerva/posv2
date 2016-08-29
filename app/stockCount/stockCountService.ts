import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StockCountComponent} from './stockCount';
import {Response} from '../response/response';

@Injectable()
export class StockCountService {
    private static API_URL_STOCK_COUNT : string = "/api/transaction/stockCount/";

    public constructor(private http : Http) {}

    public listStockCount(component : StockCountComponent) : void {
        const url = localStorage.getItem('api_url') + StockCountService. API_URL_STOCK_COUNT + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const requestOptions = new RequestOptions(headers);

        this.http.get(url, requestOptions)
                 .subscribe(
                     response=> {
                         switch(response.status) {
                             case Response.SUCCESS: 
                                    component.getCollectionView().sourceCollection = response.json();
                                    this.checkPageCount(component.getCollectionView());
                                    console.log(component.getCollectionView().pageCount);
                                    break;
                             default: break;
                         }
                     },
                     error => {
                         component.getToastr().error('Server error');
                     }
                )
    }

     public deleteStockCount(data, component : StockCountComponent) : void {
        const url : string = localStorage.getItem('api_url') + StockCountService.API_URL_STOCK_COUNT + "delete";
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

        this.http.delete(url, requestOptions)
                  .subscribe(
                      response => {
                          switch(response.status) {
                                case Response.SUCCESS:
                                    component.getToastr().success('Deleted successfully');
                                    component.getCollectionView().remove(data);
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
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}