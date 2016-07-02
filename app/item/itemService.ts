'use strict';
import { Component, Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {ItemComponent} from './item';

@Injectable()
export class ItemService {
    private url: string;
    private accessToken : string;
    private option : RequestOptions;

    constructor(private _http : Http) {
        this.url = localStorage.getItem('api_url') + "/api/MstItem"; 
        this.accessToken = localStorage.getItem('access_token');
        this.option = new RequestOptions();
    }

    public getItems(component : ItemComponent) : wijmo.collections.ObservableArray {
        const items = new wijmo.collections.ObservableArray();
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});;
      
        this.option.headers = header;
        this._http.get(this.url, this.option)
            .subscribe(
                response => {
                    const data = response.json();
                    if(data.length > 0) {
                        for(let key in data) {
                            if(data.hasOwnProperty(key)) {
                                items.push(
                                    {
                                        Id : data[key].Id,
                                        ItemCode : data[key].ItemCode,
                                        BarCode : data[key].BarCode,
                                        ItemDescription : data[key].ItemDescription,
                                        Alias : data[key].Alias,
                                        GenericName : data[key].GenericName, 
                                        Category : data[key].Category,
                                        SalesAccountId : data[key].SalesAccountId,
                                        AssetAccountId : data[key].AssetAccountId,
                                        CostAccountId : data[key].CostAccountId
                                    }
                                )
                            }
                        }
                    }
                },
                error => {
                    component.getToastr().error('Server Error', '');
                }
            );
        return items;
    }

    public addItem(data, component : ItemComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});

        header.append('Content-Type', 'application/json');
        this.option.headers = header;
        this._http.post(this.url, JSON.stringify(data), this.option)
            .subscribe(
                response => {
                    if(response.status == 200) {
                        component.getToastr().success('Save Successfull', '');
                    }
                    else {
                        component.getToastr().success('Server Error', '');
                    }
                }
            );
    }

    public updateItem(data, component : ItemComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});

        header.append('Content-Type', 'application/json');
        this.option.headers = header;
        this._http.put(this.url, JSON.stringify(data), this.option)
            .subscribe(
                response => {
                    if(response.status == 200) {
                         component.getToastr().success('Update Successfull', '');
                    }
                    else {
                          component.getToastr().success('Server Error', '');
                    }
                }
            )
    }

    public deleteItem(data, component : ItemComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});
        const id = data.Id;
        const url = this.url + '/' + id;

        this.option.headers = header;
        this._http.delete(url, this.option)
             .subscribe(
                response => {
                    if(response.status == 200) {
                        component.getToastr().success('Delete Successfull', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    }
  
}