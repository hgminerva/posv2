import{Component, Injectable} from 'angular2/core';
import{Http, Headers, RequestOptions} from 'angular2/http';
import{CustomerComponent} from './customer';
import {CustomerAddComponent} from './customerAdd';
import {Response} from '../response/response';

@Injectable()
export class CustomerService {
    private static CUSTOMER_API_URL = '/api/customer/';

    public constructor(private http : Http) {
    }

    public initCustomers(component : CustomerComponent) : void {
        const url = localStorage.getItem('api_url') + CustomerService.CUSTOMER_API_URL + 'list';
        const headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
        const options = new RequestOptions(headers);

        this.http.get(url, options)
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
                                component.getToastr().error('Server error', '');
                                break;
                            default: break;
                        }
                    }
                )
    }

    public addCustomer(data : Object, customerAddComponent : CustomerAddComponent) : void {
        const url = localStorage.getItem('api_url') +  CustomerService.CUSTOMER_API_URL + 'create';
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        headers.append('Content-Type', 'application/json'); 
        const requestOptions = new RequestOptions({ headers : headers });

        this.http.post(url, JSON.stringify(data), requestOptions)
                 .subscribe(
                    response => {
                        switch(response.status) {
                                case Response.SUCCESS :
                                        customerAddComponent.getToastr().success('Added Successfully', '');
                                        customerAddComponent.getRouter().navigate(['Customer']);
                                        break;
                                case Response.BAD_REQUEST : break;
                                case Response.FORBIDDEN_ERROR : break;
                                case Response.NOT_FOUND : 
                                        customerAddComponent.getToastr().error('Server error', '');
                                        break;
                                default: break;
                            }
                    }
                )      
    }

    public updateCustomer(data, customerComponent : CustomerAddComponent) {
            
    }

    public deleteCustomer(data, customerComponent : CustomerComponent) : void {
        const url : string = localStorage.getItem('api_url') + CustomerService.CUSTOMER_API_URL + "delete";
        const headers : Headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token') });
        headers.append('Content-Type', 'application/json'); 
        const requestOptions : RequestOptions = new RequestOptions({ headers : headers, body : JSON.stringify(data)});

        this.http.delete(url, requestOptions)
            .subscribe(
                response => {
                        switch(response.status) {
                                case Response.SUCCESS :
                                       customerComponent.getToastr().success("Deleted successfully");
                                       customerComponent.getCollectionView().remove(data);
                                        break;
                                case Response.BAD_REQUEST : break;
                                case Response.FORBIDDEN_ERROR : break;
                                case Response.NOT_FOUND : 
                                        customerComponent.getToastr().error('Server error', '');
                                        break;
                                default: break;
                        }
                }
            )
    }

   public updatePageButtons(component : CustomerComponent) : void {
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
                btnFirst.setAttribute('disabled', 'disabled');
                btnPrev.setAttribute('disabled', 'disabled');
                btnNext.removeAttribute('disabled');
                btnLast.removeAttribute('disabled');
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