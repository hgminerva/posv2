import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http'
import {Response} from '../response/response';
import {PurchasesComponent} from './purchases';

@Injectable()
export class PurchaseService {
    private static API_URL_IPURCHASE : string = "/api/transaction/purchaseOrder/";

    public constructor(private http : Http) {}

    public listPurchase(component : PurchasesComponent) : void {
        const url = localStorage.getItem('api_url') + PurchaseService.API_URL_IPURCHASE + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const requestOptions = new RequestOptions(headers);

        this.http.get(url, requestOptions)
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
                     error => {

                     }
                 )
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