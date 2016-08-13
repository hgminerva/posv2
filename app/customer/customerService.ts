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

    public initCustomers(customerComponent : CustomerComponent,
                            customerView : wijmo.collections.CollectionView) : void {
        const url = localStorage.getItem('api_url') + CustomerService.CUSTOMER_API_URL + 'list';
        const headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_token') });
        const options = new RequestOptions();

        this.http.get(url, options)
                 .subscribe(
                    response => {
                        switch(response.status) {
                            case Response.SUCCESS :
                                    customerView.sourceCollection = response.json();
                                    this.checkPageCount(customerView);
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