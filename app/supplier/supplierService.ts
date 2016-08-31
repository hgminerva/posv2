import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {SupplierComponent} from './supplier';
import {SupplierAddComponent} from './supplierAdd';
import {Response} from '../response/response';


@Injectable()
export class SupplierService {
    private static API_SUPPLIER_URL : string = '/api/supplier/';

    constructor(private http : Http) {
    }

    public listSuppliers(component : SupplierComponent) : void {
        const url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const option = new RequestOptions();

        option.headers = headers;
        this.http.get(url, option)
        .subscribe(
            response => {
                 switch(response.status) {
                        case Response.SUCCESS :
                                component.getCollectionView().sourceCollection = response.json();
                                this.updatePageButtons(component);
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

    public addSupplier(data, component : SupplierAddComponent) : void {
        const url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL + "create";
        const headers = new Headers(
            {
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
            }
        )
        const requestOptions = new RequestOptions({headers : headers});

        this.http.post(url, JSON.stringify(data), requestOptions)
            .subscribe(
                response => {
                     switch(response.status) {
                        case Response.SUCCESS :
                                component.getToastr().success('Add successful');
                                component.getRouter().navigate(['Supplier']);
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                break;
                        default: break;
                    }          
                },
                error => {

                }
            )
    }

    public deleteSupplier(data, component : SupplierComponent) : void {
        const url = localStorage.getItem('api_url') + SupplierService.API_SUPPLIER_URL + "delete";
        const headers = new Headers(
            {
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
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

   public updatePageButtons(component : SupplierComponent) : void {
        var currentPage = component.getCollectionView().pageIndex;
        var totalPage = component.getCollectionView().pageCount;
        var btnFirst = document.getElementById('btnFirst');
        var btnPrev = document.getElementById('btnBack');
        var btnNext = document.getElementById('btnNext');
        var btnLast = document.getElementById('btnLast');
        var pageButton = document.getElementById('page-button');
        var pageCount = (<HTMLInputElement>document.getElementById('pageCount'));
        var filterText = (<HTMLInputElement>document.getElementById('InputFilter'));

        pageButton.style.display = "none";

        if(totalPage == 0) {
            btnFirst.setAttribute('disabled', 'disabled');
            btnPrev.setAttribute('disabled', 'disabled');
            btnNext.setAttribute('disabled', 'disabled');
            btnLast.setAttribute('disabled', 'disabled');
            
            return;
        }

        pageButton.style.display = "block";

        if(currentPage == 0) {
            if(filterText.value != "") {
                if(totalPage <= 1) {
                    btnFirst.setAttribute('disabled', 'disabled');
                    btnPrev.setAttribute('disabled', 'disabled');
                    btnNext.setAttribute('disabled', 'disabled');
                    btnLast.setAttribute('disabled', 'disabled');
                }
                else {
                    btnFirst.setAttribute('disabled', 'disabled');
                    btnPrev.setAttribute('disabled', 'disabled');
                    btnNext.removeAttribute('disabled');
                    btnLast.removeAttribute('disabled');
                }
            }
            else {
                if(totalPage > 1) {
                    btnFirst.setAttribute('disabled', 'disabled');
                    btnPrev.setAttribute('disabled', 'disabled');
                    btnNext.removeAttribute('disabled');
                    btnLast.removeAttribute('disabled');
                }
                else {
                    btnFirst.setAttribute('disabled', 'disabled');
                    btnPrev.setAttribute('disabled', 'disabled');
                    btnNext.setAttribute('disabled', 'disabled');
                    btnLast.setAttribute('disabled', 'disabled');
                }
            }
        }
        else if(currentPage == totalPage - 1) {
            btnNext.setAttribute('disabled', 'disabled');
            btnLast.setAttribute('disabled', 'disabled');
            btnFirst.removeAttribute('disabled');
            btnPrev.removeAttribute('disabled');
        }
        else {
            if(btnFirst.hasAttribute('disabled')) {
                btnFirst.removeAttribute('disabled');
            }
            if(btnPrev.hasAttribute('disabled')) {
                btnPrev.removeAttribute('disabled');
            }
            if(btnNext.hasAttribute('disabled')) {
                btnNext.removeAttribute('disabled');
            }
            if(btnLast.hasAttribute('disabled')) {
                btnLast.removeAttribute('disabled');
            }
        }
        pageCount.innerHTML = currentPage + 1 + "/" + totalPage;
    }
}