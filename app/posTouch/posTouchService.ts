'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {POSTouchComponent} from './posTouch';

@Injectable()
export class POSTouchService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    }   
    
    // ============
    // TABLE GROUPS
    // ============
        
    getTableGroups(component : POSTouchComponent) : wijmo.collections.ObservableArray {
        let data = new wijmo.collections.ObservableArray();
        let api_url = localStorage.getItem('api_url');
        let url = api_url + "/api/MstTableGroup"; 
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                tableGroup: response.json()[key].TableGroup,
                                entryUserId: response.json()[key].EntryUserId,
                                entryDateTime: response.json()[key].EntryDateTime,
                                updateUserId: response.json()[key].UpdateUserId,
                                updateDateTime: response.json()[key].UpdateDateTime,
                                isLocked: response.json()[key].IsLocked   
                            });                            
                        }
                    }  
                    component.fillTableGroup();                            
                },
                error => {
                    component.toastr.error('Server Error', '');
                }                
            );
            
        return data;
    }
    
    // ======
    // TABLES
    // ======
    
    getTablesPerTableGroup(component: POSTouchComponent, tableGroupId: number) : wijmo.collections.ObservableArray {
        let data = new wijmo.collections.ObservableArray();
        let api_url = localStorage.getItem('api_url');
        let url = api_url + "/api/MstTable/PerTableGroup/" + tableGroupId;
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options = new RequestOptions({ headers: headers }); 

        this.http.get(url, options)
            .subscribe(
                response => {
                    for (var key in response.json()) {
                        if (response.json().hasOwnProperty(key)) {
                            data.push({
                                id: response.json()[key].Id,
                                tableCode: response.json()[key].TableCode,
                                tableGroupId: response.json()[key].TableGroupId,
                                tableGroup: response.json()[key].TableGroup,
                                topLocation: response.json()[key].TopLocation,
                                leftLocation: response.json()[key].LeftLocation
                            });                            
                        }
                    }  
                    component.fillTable();                            
                },
                error => {
                    component.toastr.error('Server Error', '');
                }                
            );
            
        return data;
    }
    
}