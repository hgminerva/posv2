'use strict';
import { Component, Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {ItemComponent} from './item';

import {Response} from '../response/response';

@Injectable()
export class ItemService {
    public static page : number = 0;
    private static SUCCESS : number = 200;
    private static GRID_LENGTH = 10;
    private static API_ITEM_URL = '/api/item/';
    private static API_UNIT_URL = '/api/unit/';
    private items : wijmo.collections.ObservableArray;

    constructor(private _http : Http) {
        this.items = new wijmo.collections.ObservableArray();
    }

    public initItems(component : ItemComponent, itemsView : wijmo.collections.CollectionView) {
        const url : string = localStorage.getItem('api_url') + ItemService.API_ITEM_URL + "list"; 
        const accessToken : string = localStorage.getItem('access_token');
        const header = new Headers({'Authorization' : 'Bearer ' + accessToken});
        const option = new RequestOptions();

        option.headers = header;
        this._http.get(url, option)
            .subscribe(
                response => {
                    switch(response.status) {
                        case Response.SUCCESS :
                                itemsView.sourceCollection = response.json();
                                this.checkPageCount(itemsView);
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                component.getToastr().error('Server Error', '');
                                break;
                        default: break;
                    }           
                }
            );
    }

    public initUnit(itemComponent : ItemComponent, cmbUnit : wijmo.input.ComboBox) : void {
        const url : string = localStorage.getItem('api_url') + ItemService.API_UNIT_URL + "list"; 
        const accessToken : string = localStorage.getItem('access_token');
        const header = new Headers({'Authorization' : 'Bearer ' + accessToken});
        const option = new RequestOptions();

        option.headers = header;
        this._http.get(url, option)
            .subscribe(
                response => { 
                     cmbUnit = new wijmo.input.ComboBox('#cmbUnit',{
                        itemsSource : this.getUnits(response.json())
                    });
                },
                error => {
                    itemComponent.getToastr().error('Server Error', '');
                }
            );
    }

    private getUnits(units : wijmo.collections.ObservableArray) : wijmo.collections.ObservableArray {
        if(units != null) {
            const data = new wijmo.collections.ObservableArray();
            for(var i = 0; i < units.length; i++) {
                data.push(units[i].Unit);
            }
            return data;
        }
        return null;
    }

    private checkPageCount(itemsView : wijmo.collections.CollectionView) : void {
        if(itemsView.pageCount == 1 || itemsView.itemCount == 0){
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        else {
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}