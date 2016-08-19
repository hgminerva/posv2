import{Component, Injectable} from 'angular2/core';
import{Http, Headers, RequestOptions} from 'angular2/http';
import{DisbursementComponent} from './disbursement';
import {Response} from '../response/response';

@Injectable()
export class DisbursementService {
      private static DISBURSEMENT_API_URL = '/api/transaction/disbursement/';

      public constructor(private http : Http) {}

      public listDisbursement(component : DisbursementComponent) : void {
            const url = localStorage.getItem('api_url') +  DisbursementService.DISBURSEMENT_API_URL + 'list';
            const headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
            const options = new RequestOptions(headers);

            this.http.get(url, options)
                     .subscribe(
                         response => {
                              switch(response.status) {
                                case Response.SUCCESS: 
                                    component.getCollectionView().sourceCollection = response.json();
                                    this.checkPageCount(component.getCollectionView());
                                    break;
                                default: break;
                         }
                         },
                         error=> {

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