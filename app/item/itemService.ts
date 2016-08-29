'use strict';
import { Component, Injectable } from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {ItemComponent} from './item';
import {ItemAddComponent} from './itemAdd';

import {Response} from '../response/response';

@Injectable()
export class ItemService {
    private static API_ITEM_URL = '/api/item/';
    private static API_UNIT_URL = '/api/unit/';

    public constructor(private _http : Http) {
    }

    public listItems(component : ItemComponent) {
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
                                component.getCollectionView().sourceCollection = response.json();
                                this.checkPageCount(component.getCollectionView());
                                var pageCount = (<HTMLInputElement>document.getElementById('pageCount'));
                                pageCount.innerHTML = component.getCollectionView().pageIndex + 1 + "/" + (component.getCollectionView().pageCount + 1);
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                break;
                        default: break;
                    }           
                },
                error => {
                    component.getToastr().error('Server Error', '');
                }
            );
    }

    public addItem(data, itemComponent : ItemComponent) : void {

    }

    public deleteItem(data, itemComponent : ItemComponent) : void {
        const url : string = localStorage.getItem('api_url') + ItemService.API_ITEM_URL + "delete";
        const headers = new Headers(
            {
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json' 
            }
        );
        const requestOptions = new RequestOptions(
            { 
                headers : headers,
                body : JSON.stringify(data)
            }
        )

        this._http.delete(url, requestOptions)
                  .subscribe(
                      response => {
                          switch(response.status) {
                              case Response.SUCCESS:
                                   itemComponent.getToastr().success('Deleted successfully');
                                   itemComponent.getCollectionView().remove(data);
                                   break;
                              default: break;
                          }
                      },
                      error => {
                          itemComponent.getToastr().error('Server Error');
                      }
                  );
    }

    public initUnit(itemAddComponent : ItemAddComponent, cmbUnit : wijmo.input.ComboBox) : void {
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
                    itemAddComponent.getToastr().error('Server Error', '');
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
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}