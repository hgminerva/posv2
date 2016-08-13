import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {DiscountingComponent} from './discounting';
import {Response} from '../response/response';

@Injectable()
export class DiscountingService {
    public static page : number = 0;
    private static GRID_LENGTH = 10;
    private discounts : wijmo.collections.ObservableArray;

    constructor(private _http : Http) {
        this.discounts = new wijmo.collections.ObservableArray();
        DiscountingService.page = 0;
    }

    public initDicountData(discountComponent : DiscountingComponent,
                           discountView : wijmo.collections.CollectionView) : void {
        const api_url = localStorage.getItem('api_url');
        const url = api_url + "/api/discount/list";
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const options = new RequestOptions({headers : header});

        this._http.get(url, options)
            .subscribe(response => {
                 switch(response.status) {
                        case Response.SUCCESS :
                                discountView.sourceCollection = response.json();
                                this.checkPageCount(discountView);
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                discountComponent.getToastr().error('Server Error', '');
                                break;
                        default: break;
                    }           
            },
            error => {
                discountComponent.getToastr().error('Server error', '');
            });
    }

    /**
    * This function will display the data by 10 to grid.
    */
    public displayDataToGrid(discountView : wijmo.collections.CollectionView) : void {
        if(this.discounts.length > 0) {
            const discountData : wijmo.collections.ObservableArray = new wijmo.collections.ObservableArray();       
            for(var i = 0; i < DiscountingService.GRID_LENGTH; i++) {
                if(DiscountingService.page < this.discounts.length 
                    || this.discounts.length >= DiscountingService.GRID_LENGTH){
                    discountData.push(this.discounts[DiscountingService.page++]);
                    console.log(discountData[0].Id);
                }
            }
            discountView.sourceCollection = discountData;
        }
    }

    private checkPageCount(customerView: wijmo.collections.CollectionView) : void {
        if(customerView.pageCount == 1 || customerView.itemCount == 0){
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        else {
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
    
}