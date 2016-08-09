import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {UsersComponent} from './users';

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
                     usersView : wijmo.collections.CollectionView) : wijmo.collections.ObservableArray {
        const url = localStorage.getItem('api_url') + '/api/user/list';
        const users = new wijmo.collections.ObservableArray();
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});
        const option = new RequestOptions();

        option.headers = header;
        this._http.get(url, option)
            .subscribe(
                response => {
                   this.users = response.json();
                   this.displayUserToGrid(usersView);
                },
                error => {
                    component.getToastr().error('Server Error', '');
                }
            );
        return users;
    }

    public addUser(data, component : UsersComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});
        
        header.append('Content-Type', 'application/json');
        this.option.headers = header;
        this._http.post(this.url, JSON.stringify(data), this.option)
            .subscribe(
                response => {
                    if(response.status == UsersService.SUCCESS) {
                        component.getToastr().success('Save Successful', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '')
                    }
                }
            )
    }

    public setUser(data, component : UsersComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});

        header.append('Content-Type', 'application/json');
        this.option.headers = header;
        this._http.put(this.url, JSON.stringify(data), this.option)
            .subscribe(
                response => {
                    if(response.status == UsersService.SUCCESS) {
                        component.getToastr().success('Update Successful', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '')
                    }
                }
            )
    }

    public deleteUser(data, component : UsersComponent) : void {
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});
        const id = data.Id;
        const url = this.url + '/' + id;

        this.option.headers = header;
        this._http.delete(url, this.option)
            .subscribe(
                response => {
                    if(response.status ==  UsersService.SUCCESS) {
                        component.getToastr().success('Delete Successful', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    }

    public displayUserToGrid(usersView : wijmo.collections.CollectionView) : void {
        if(this.users.length > 0 ) {
            const data : wijmo.collections.ObservableArray = new wijmo.collections.ObservableArray();
            for(var i = 0; i < UsersService.GRID_LENGTH; i++ ){
                if(UsersService.page < this.users.length || this.users.length >= UsersService.GRID_LENGTH){
                    data.push(this.users[UsersService.page++]);
                }
                else {
                    break;
                }
            }
            usersView.sourceCollection = data;
        }
    }
}