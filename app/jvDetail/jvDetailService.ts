'use strict';

import {Component,Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

import {JVDetailComponent} from '../jvDetail/jvDetail';
import {JVModel} from '../model/jvModel';

@Injectable()
export class JVDetailService {
    private http : Http;
    
    constructor (_http: Http) {
        this.http = _http;
    } 
    
    getJV(component : JVDetailComponent) : JVModel {
        let data = new JVModel();
        let url : string = "http://api.accountico.io/api/TrnJournalVoucher/" + component.id;
        let headers : Headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token') });        
        let options : RequestOptions = new RequestOptions({ headers: headers });       
        
        this.http.get(url, options)
            .subscribe(
                response => {
                    data.id = +response.json().Id;
                    data.branchId = +response.json().BranchId;
                    data.branch = response.json().Branch;
                    data.jvNumber = response.json().JVNumber;
                    data.jvDate = response.json().JVDate;
                    data.particulars = response.json().Particulars;
                    data.manualJVNumber = response.json().ManualJVNumber;
                    data.preparedById = +response.json().PreparedById;
                    data.preparedBy = response.json().PreparedBy;
                    data.checkedById = +response.json().CheckedById;
                    data.checkedBy = response.json().CheckedBy;
                    data.approvedById = +response.json().ApprovedById;
                    data.approvedBy = response.json().ApprovedBy;
                    data.isLocked = response.json().IsLocked;
                    data.createdById = +response.json().CreatedById;
                    data.createdDateTime = response.json().CreatedDateTime;
                    data.updatedById = +response.json().UpdatedById;
                    data.updatedDateTime = response.json().UpdatedDateTime;                   
                },
                error => {
                    component._toastr.error('Get Error', '');
                }                
            );
            
        return data;
        
    }
}