import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class StockInService {

    constructor(private _http : Http) {

    }

    public getStockIn() : wijmo.collections.ObservableArray {
        let stockIns = new wijmo.collections.ObservableArray();
        let api_url = localStorage.getItem('api_url');
        let url = api_url + "/api/TrnStockIn";
        let header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        let option = new RequestOptions({headers : header});

        this._http.get(url, option)
            .subscribe(
                response => {
                    let data = response.json();
                    if(data.length > 0) {
                        for(let key in data) {
                            if(data.hasOwnProperty(key)) {
                                data.push({
                                    Id : data[key].Id,
                                    PeriodId : data[key].PeriodId,
                                    StockInDate :  data[key].StockInDate,
                                    StockInNumber :  data[key].StockInNumber,
                                    SupplierId :  data[key].SupplierId,
                                    Remarks :  data[key].Remarks,
                                    IsReturn :  data[key].IsReturn,
                                    CollectionId :  data[key].CollectionId,
                                    PurchaseOrderId :  data[key].PurchaseOrderId,
                                    PreparedBy :  data[key].PeriodId.PreparedBy,
                                    CheckedBy :  data[key].CheckedBy,
                                    ApprovedBy : data[key].ApprovedBy,
                                    IsLocked : data[key].IsLocked,
                                    EntryUserId : data[key].EntryUserId,
                                    EntryDateTime : data[key].EntryDateTime,
                                    UpdateUserId : data[key].UpdateUserId,
                                    UpdateDateTime : data[key].UpdateDateTime,
                                    SalesId : data[key].SalesId
                                })
                            }
                        }
                    }
            },
                error => {

            });
        return stockIns;
    }
}