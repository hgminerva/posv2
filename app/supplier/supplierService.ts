import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {SupplierComponent} from './supplier';

@Injectable()
export class SupplierService {
    private static GRID_LENGTH : number = 10;
    private static SUCCESS : number = 200;
    private static API_SUPPLIER_URL : string = '/api/supplier/list';
    private page : number;
    private suppliers : wijmo.collections.ObservableArray;

    constructor(private http : Http) {
        this.suppliers = new wijmo.collections.ObservableArray();
        this.page = 0;
    }

    public initSuppliers(supplierComponent : SupplierComponent,
                         supplierView : wijmo.collections.CollectionView) : void {
        const url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL;
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const option = new RequestOptions();

        option.headers = headers;
        this.http.get(url, option)
        .subscribe(
            response => {
                this.suppliers = response.json();
                this.displaySupplierToGrid(supplierView);
            },
            error => {
                supplierComponent.getToastr().error('Server error', '');
            }
        )
    }

    public displaySupplierToGrid(supplierView : wijmo.collections.CollectionView) : void {
        const suppliersLength : number = this.suppliers.length;
        if(suppliersLength > 0) {
            const data : wijmo.collections.ObservableArray = new wijmo.collections.ObservableArray();
            for(var i = 0; i < SupplierService.GRID_LENGTH; i++) {
                if(this.page < suppliersLength || this.page >= SupplierService.GRID_LENGTH){
                    data.push(this.suppliers[this.page++]);
                    console.log(data[i].IsLocked);
                }
                else {
                    break;
                }
            }
            supplierView.sourceCollection = data;
        }        
    }

    public setPage(p : number) : void { this.page += p; }

    public getPage() : number { return this.page; }
}