import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {DiscountingComponent} from './discounting';

@Injectable()
export class DiscountingService {

    constructor(private _http : Http) {

    }

    public getDiscounting() : wijmo.collections.ObservableArray {
        let discounts = new wijmo.collections.ObservableArray();
        let api_url = localStorage.getItem('api_url');
        let url = api_url + "/api/MstDiscount";
        let header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        let options = new RequestOptions({headers : header});

        this._http.get(url, options)
            .subscribe(response => {
                let data = response.json();
                if(data.length > 0) {
                    for(let key in data) {
                        if(data.hasOwnProperty(key)) {
                            discounts.push({
                               
                            })
                        }
                    }
                }
            },
            error => {

            });
        return discounts;
    }
}