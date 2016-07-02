import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {UsersComponent} from './users';

@Injectable()
export class UsersService {
    private url : string;
    private accessToken : string;
    private option : RequestOptions;

    constructor(private _http : Http) {
        this.url = localStorage.getItem('api_url') + "/api/MstUser"; 
        this.accessToken = localStorage.getItem('access_token');
        this.option = new RequestOptions();
    }

    public getUsers(component : UsersComponent) : wijmo.collections.ObservableArray {
        const users = new wijmo.collections.ObservableArray();
        const header = new Headers({'Authorization' : 'Bearer ' + this.accessToken});

        this.option.headers = header;
        this._http.get(this.url, this.option)
            .subscribe(
                response => {
                    const data = response.json();
                    if(data.length > 0) {
                        for(let key in data) {
                            users.push(
                                {
                                    Id : data[key].Id,
                                    UserName : data[key].UserName,
                                    Password : data[key].Password,
                                    FullName : data[key].FullName,
                                    UserCardNumber : data[key].UserCardNumber,
                                    EntryUserId : data[key].EntryUserId,
                                    EntryDateTime : data[key].EntryDateTime,
                                    UpdateUserId : data[key].UpdateUserId,
                                    UpdateDateTime : data[key].UpdateDateTime,
                                    IsLocked : data[key].IsLocked
                                }
                            )
                        }
                    }
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
                    if(response.status == 2) {
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
                    if(response.status == 2) {
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
                    if(response.status == 200) {
                        component.getToastr().success('Delete Successful', '');
                    }
                    else {
                        component.getToastr().error('Server Error', '');
                    }
                }
            )
    }
}