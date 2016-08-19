import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {DiscountingComponent} from './discounting';
import {Response} from '../response/response';

@Injectable()
export class DiscountingService {
    private static API_DISCOUNT_URL = "/api/discount/";

    constructor(private _http : Http) {
    }

    public listDicount(discountComponent : DiscountingComponent) : void {
        const url = localStorage.getItem('api_url') + DiscountingService.API_DISCOUNT_URL + "list";
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const options = new RequestOptions({headers : header});

        this._http.get(url, options)
            .subscribe(response => {
                 switch(response.status) {
                        case Response.SUCCESS :
                                discountComponent.getCollectionView().sourceCollection = response.json();
                                this.checkPageCount(discountComponent.getCollectionView());
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                break;
                        default: break;
                    }           
            },
            error => {
                discountComponent.getToastr().error('Server error', '');
            });
    }

    private checkPageCount(customerView: wijmo.collections.CollectionView) : void {
        if(customerView.pageCount == 1 || customerView.itemCount == 0){
                document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        document.getElementById('btnBack').setAttribute('disabled', 'disabled');
    }
    
}