import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {UsersComponent} from './users';
import {Response} from '../response/response';


@Injectable()
export class UsersService {
    public static page : number = 0;
    private static GRID_LENGTH : number = 10;
    private url : string;
    private accessToken : string;
    private option : RequestOptions;
    private static SUCCESS : number = 200;
    private users : wijmo.collections.ObservableArray;

    constructor(private _http : Http) {
        this.url = localStorage.getItem('api_url') + "/api/MstUser"; 
        this.accessToken = localStorage.getItem('access_token');
        this.users = new wijmo.collections.ObservableArray();
    }

    public initUsers(component : UsersComponent,
                     usersView : wijmo.collections.CollectionView) : void{
        const url = localStorage.getItem('api_url') + '/api/user/list';
        const users = new wijmo.collections.ObservableArray();
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});
        const option = new RequestOptions({headers : header});
        
        this._http.get(url, option)
            .subscribe(
                response => {
                     switch(response.status) {
                        case Response.SUCCESS :
                                usersView.sourceCollection = response.json();
                                this.checkPageCount(usersView);
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