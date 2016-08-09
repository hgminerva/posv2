'use strict';
import { Component, Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {ItemComponent} from './item';

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
                    this.items = response.json();   
                    this.displayDataToGrid(itemsView);
                },
                error => {
                    component.getToastr().error('Server Error', '');
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
                        itemsSource :   this.getUnits(response.json())
                    });
                },
                error => {
                    itemComponent.getToastr().error('Server Error', '');
                }
            );
    }

    public addItem(data, component : ItemComponent) : void {
        const url : string = localStorage.getItem('api_url') + "/api/customer/create"; 
        const accessToken : string = localStorage.getItem('access_token');
        const header = new Headers({'Authorization' : 'Bearer ' + accessToken});
        const option = new RequestOptions();

        header.append('Content-Type', 'application/json');
        option.headers = header;

        this._http.post(url, JSON.stringify(data), option)
            .subscribe(
                response => {
                    if(response.status == ItemService.SUCCESS) {
                        component.getToastr().success('Save Successfull', '');
                    }
                    else {
                        component.getToastr().success('Server Error', '');
                    }
                }
            );
    }

    public updateItem(data, component : ItemComponent) : void {
        const url : string = localStorage.getItem('api_url') + "/api/customer/update"; 
        const accessToken : string = localStorage.getItem('access_token');
        const header = new Headers({'Authorization' : 'Bearer ' + accessToken});
         const option = new RequestOptions();
        header.append('Content-Type', 'application/json');
        option.headers = header;
        this._http.put(url, JSON.stringify(data), option)
            .subscribe(
                response => {
                    if(response.status == ItemService.SUCCESS) {
                         component.getToastr().success('Update Successfull', '');
                    }
                    else {
                          component.getToastr().success('Server Error', '');
                    }
                }
            )
    }

    public deleteItem(data, component : ItemComponent) : void {
        const url : string = localStorage.getItem('api_url') + "/api/customer/delete/" + data.id; 
        const accessToken : string = localStorage.getItem('access_token');
        const header = new Headers({'Authorization' : 'Bearer ' + accessToken});
        const id = data.Id;
        const option = new RequestOptions();
        option.headers = header;
        this._http.delete(url, option)
             .subscribe(
                response => {
                    if(response.status == ItemService.SUCCESS) {
                        component.getToastr().success('Delete Successfull', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    }

    /*
    * This function will display the data of the table MstItem from database by 10 to the wijmo flex grid.
    */
    public displayDataToGrid(itemsView : wijmo.collections.CollectionView) : void {
        if(this.items.length > 0) {
            const gridData : wijmo.collections.ObservableArray = new wijmo.collections.ObservableArray();
            for(var i = 0; i < ItemService.GRID_LENGTH; i++) {
                if(ItemService.page < this.items.length || this.items.length >= ItemService.GRID_LENGTH) {
                    gridData.push(this.items[ItemService.page++]); 
                } 
                else {
                    break;
                }
                itemsView.sourceCollection = gridData;
            }
        }
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
}