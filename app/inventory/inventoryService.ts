import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {InventoryComponent} from './inventory';

@Injectable()
export class InventoryService {
    private url: string;
    private accessToken : string;
    private option : RequestOptions;

    constructor(private _http : Http) {
        this.url = localStorage.getItem('api_url') + "/api/MstItemInventory";
        this.accessToken = localStorage.getItem('access_token');
        this.option = new RequestOptions();
    }

    public getInventory(component : InventoryComponent) : wijmo.collections.ObservableArray {
        const inventory = new wijmo.collections.ObservableArray();
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});
      
        this.option.headers = header;
        this._http.get(this.url, this.option)
            .subscribe( 
                response => {
                    const data = response.json();
                    if(data.length > 0) {
                        for(let key in data) {
                            if(data.hasOwnPropertyKey(key)) {
                                inventory.push(
                                    {
                                        Id : data[key].Id
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

        return inventory;
    }

    public addInventory(data, component : InventoryComponent) : void {
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
                        component.getToastr().error('Server Error', '');
                    }
                }
            );
    }

    public updateInventory(data, component : InventoryComponent) : void {
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
                        component.getToastr().error('Server Error', '');
                    }
                }
            );
    }

    public deleteInventory(data, component : InventoryComponent) : void {
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
            );
    }
}