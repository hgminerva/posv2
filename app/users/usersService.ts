import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {UsersComponent} from './users';
import {Response} from '../response/response';


@Injectable()
export class UsersService {
    private static API_URL_USER : string = "/api/user/";

    constructor(private http : Http) {

    }

    public initUsers(component : UsersComponent) : void{
        const url = localStorage.getItem('api_url') + UsersService.API_URL_USER + "list";
        const header = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const option = new RequestOptions({headers : header});
        
        this.http.get(url, option)
            .subscribe(
                response => {
                     switch(response.status) {
                        case Response.SUCCESS :
                                component.getCollectionView().sourceCollection = response.json();
                                this.checkPageCount(component.getCollectionView());
                                break;
                        case Response.BAD_REQUEST : break;
                        case Response.FORBIDDEN_ERROR : break;
                        case Response.NOT_FOUND : 
                                component.getToastr().error('Server Error', '');
                                break;
                        default: break;
                    }           
                }
            );
    }

     public deleteUserr(data, component : UsersComponent) : void {
        const url = localStorage.getItem('api_url') + UsersService.API_URL_USER +  "delete";
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