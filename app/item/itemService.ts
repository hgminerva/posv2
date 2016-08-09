'use strict';
import { Component, Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {ItemComponent} from './item';

@Injectable()
export class ItemService {
    public static page : number = 0;
    private static SUCCESS : number = 200;
    private static GRID_LENGTH = 10;
    private items : wijmo.collections.ObservableArray;

    constructor(private _http : Http) {
        this.items = new wijmo.collections.ObservableArray();
        ItemService.page = 0;
    }

    public displayItems(component : ItemComponent, itemsView : wijmo.collections.CollectionView) {
        const url : string = localStorage.getItem('api_url') + "/api/item/list"; 
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
    * This function will display the data by 10 to grid
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
            }
            itemsView.sourceCollection = gridData;
        }
    }
}