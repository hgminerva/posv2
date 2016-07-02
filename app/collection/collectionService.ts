import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {CollectionComponent} from './collection';

@Injectable()
export class CollectionService {
    private url : string; 

    constructor(private _http : Http) {
        this.url = localStorage.getItem('api_url') + '/api/TrnCollection';
    }

    public getCollection(component : CollectionComponent) : wijmo.collections.ObservableArray {
        const collection = new wijmo.collections.ObservableArray();
        const header = new Headers({'Authorization' : 'Bearer' + localStorage.getItem('access_token')});
        const option = new RequestOptions({headers : header});

        this._http.get(this.url, option)
            .subscribe(
                response => {
                    const data = response.json();
                    if(data.length > 0) {
                        for(let key in data) {
                            if(data.hasOwnProperty(key)) {
                                collection.push(
                                    {
                                        Id : data[key].Id,
                                        PeriodId : data[key].PeriodId,
                                        CollectionDate : data[key].CollectionDate,
                                        CollectionNumber : data[key].CollectionNumber,
                                        TerminalId : data[key].TerminalId,
                                        ManualORNumber : data[key].ManualORNumber,
                                        CustomerId : data[key].CustomerId,
                                        Remarks : data[key].Remarks,
                                        SelectId : data[key].SelectId,
                                        SalesBalanceAmount : data[key].SalesBalanceAmount,
                                        Amount : data[key].Amount,
                                        TenderAmount : data[key].TenderAmount,
                                        ChangeAmount : data[key].ChangeAmount,
                                        PreparedBy : data[key].PreparedBy,
                                        CheckedBy :data[key].CheckedBy,
                                        ApprovedBy : data[key].ApprovedBy,
                                        IsCancelled :data[key].IsCancelled,
                                        IsLocked : data[key].IsLocked,
                                        EntryUserId : data[key].EntryUserId,
                                        EntryDateTime : data[key].EntryDateTime,
                                        UpdateUserId : data[key].UpdateUserId,
                                        UpdateDateTime : data[key].UpdateDateTime
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
        return collection;
    }

    public addCollection(data, component : CollectionComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        header.append('Content-Type', 'application/json');
        const option = new RequestOptions({headers : header});

        this._http.post(this.url, JSON.stringify(data), option)
            .subscribe(
                response => {
                    if(response.status == 200) {
                        component.getToastr().success('Saved Successfully', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    } 

    public updateCollection(data, component : CollectionComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        header.append('Content-Type', 'application/json');
        const option = new RequestOptions({headers : header});

        this._http.put(this.url, JSON.stringify(data), option)
            .subscribe(
                response => {
                    if(response.status == 200) {
                        component.getToastr().success('Updated Successfully', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    }

    public deleteCollection(data, component : CollectionComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const option = new RequestOptions({headers : header});

        this._http.delete(this.url, option)
            .subscribe(
                response => {
                    if(response.status == 200) {
                        component.getToastr().success('Deleted Successfully', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    }
}