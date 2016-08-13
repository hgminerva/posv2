import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {SupplierComponent} from './supplier';
import {Response} from '../response/response';


@Injectable()
export class SupplierService {
    private static API_SUPPLIER_URL : string = '/api/supplier/list';

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
                 switch(response.status) {
                        case Response.SUCCESS :
                                supplierView.sourceCollection = response.json();
                                this.checkPageCount(supplierView);
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                component.getToastr().error('Server Error', '');
                                break;
                        default: break;
                    }          
            },
            error => {
                supplierComponent.getToastr().error('Server error', '');
            }
        )
    }

    private checkPageCount(customerView: wijmo.collections.CollectionView) : void {
        if(customerView.pageCount == 1 || customerView.itemCount == 0){
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
                document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
        else {
                document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}