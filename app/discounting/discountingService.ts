import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {DiscountingComponent} from './discounting';

@Injectable()
export class DiscountingService {
    public static page : number = 0;
    private static GRID_LENGTH = 10;
    private discounts : wijmo.collections.ObservableArray;

    constructor(private _http : Http) {
        this.discounts = new wijmo.collections.ObservableArray();
        DiscountingService.page = 0;
    }

    public displayDicountData(discountComponent : DiscountingComponent,
                              discountView : wijmo.collections.CollectionView) : void {
        const api_url = localStorage.getItem('api_url');
        const url = api_url + "/api/discount/list";
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const options = new RequestOptions({headers : header});

        this._http.get(url, options)
            .subscribe(response => {
                this.discounts = response.json();
                this.displayDataToGrid(discountView);
            },
            error => {
                discountComponent.getToastr().error('Server error', '');
            });
    }

    /**
    * This function will display the data by 10 to grid.
    */
    private displayDataToGrid(discountView : wijmo.collections.CollectionView) : void {
        if(this.discounts.length > 0) {
            const discountData : wijmo.collections.ObservableArray = new wijmo.collections.ObservableArray();       
            for(var i = 0; i < DiscountingService.GRID_LENGTH; i++) {
                if(DiscountingService.page < this.discounts.length || 
                    this.discounts.length >= DiscountingService.GRID_LENGTH){
                    discountData.push(this.discounts[DiscountingService.page++]);
                }
            }
            discountView.sourceCollection = discountData;
        }
    }
    
}