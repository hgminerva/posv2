import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {DebitCreditMemoComponent} from './debitCreditMemo';
import {Response} from '../response/response';

@Injectable()
export class  DebitCreditMemoService{
    private static API_URL_RESTAURANT_TABLE : string = "/api/transaction/debitCreditMemo/";

    public constructor(private http : Http) {}

    public listDebitCreditMemo(component : DebitCreditMemoComponent) : void {
        const url = localStorage.getItem('api_url') + DebitCreditMemoService.API_URL_RESTAURANT_TABLE  + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const requestOptions = new RequestOptions();

        this.http.get(url, requestOptions)
                 .subscribe(
                     response=> {
                         switch(response.status) {
                             case Response.SUCCESS: 
                                    component.getCollectionView().sourceCollection = response.json();
                                    this.checkPageCount(component.getCollectionView());
                                    console.log(response.json());
                                    break;
                             default: break;
                         }
                     },
                     error => {
                         component.getToastr().error('Server error');
                     }
                )
    }

    public deleteCollection(data, component : DebitCreditMemoComponent) : void {
        const url : string = localStorage.getItem('api_url') + DebitCreditMemoService.API_URL_RESTAURANT_TABLE + "delete";
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
                                    this.listDebitCreditMemo(component);
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