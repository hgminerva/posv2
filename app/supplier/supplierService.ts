import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {SupplierComponent} from './supplier';
import {Response} from '../response/response';


@Injectable()
export class SupplierService {
    private static API_SUPPLIER_URL : string = '/api/supplier/';

    constructor(private http : Http) {
    }

    public listSuppliers(supplierComponent : SupplierComponent) : void {
        const url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const option = new RequestOptions();

        option.headers = headers;
        this.http.get(url, option)
        .subscribe(
            response => {
                 switch(response.status) {
                        case Response.SUCCESS :
                                supplierComponent.getCollectionView().sourceCollection = response.json();
                                this.checkPageCount(supplierComponent.getCollectionView());
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                break;
                        default: break;
                    }          
            },
            error => {
                supplierComponent.getToastr().error('Server error', '');
            }
        )
    }

    public deleteSupplier(data, component : SupplierComponent) : void {
        const url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL + "delete";
        const headers = new Headers(
            {
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json',
            }
        )
        const requestOptions = new RequestOptions({headers : headers,  body : JSON.stringify(data)});

        this.http.delete(url, requestOptions)
                .subscribe(
                    response => {
                         switch(response.status) {
                        case Response.SUCCESS :
                                component.getCollectionView().remove(data);
                                component.getToastr().success('Delete Successful');
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                break;
                        default: break;
                    }          
                    },
                    error => {
                        component.getToastr().error('Server error', '');
                    }
                )
    }

    private checkPageCount(customerView: wijmo.collections.CollectionView) : void {
        if(customerView.pageCount == 1 || customerView.itemCount == 0){
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}