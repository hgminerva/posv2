import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StockOutComponent} from './stockOut';
import {StockOutAddComponent} from './stockOutAdd';
import {Response} from '../response/response';

@Injectable()
export class StockOutService {
    private static API_URL_STOCK_OUT : string = "/api/transaction/stockOut/";
    private static ACCOUNT_API_URL = '/api/acount/';
    private static API_URL_USER : string = "/api/user/";

    public constructor(private http : Http) {}

    public listStockOut(component : StockOutComponent) : void {
        const url = localStorage.getItem('api_url') + StockOutService. API_URL_STOCK_OUT + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const requestOptions = new RequestOptions();

        this.http.get(url, requestOptions)
                 .subscribe(
                     response=> {
                         switch(response.status) {
                             case Response.SUCCESS: 
                                    component.getCollectionView().sourceCollection = response.json();
                                    this.updatePageButtons(component);
                                    break;
                             default: break;
                         }
                     },
                     error => {
                         component.getToastr().error('Server error');
                     }
                )
    }

    public deleteStockOut(data, component : StockOutComponent) : void {
        const url : string = localStorage.getItem('api_url') + StockOutService.API_URL_STOCK_OUT + "delete";
        const headers = new Headers(
            {
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token'),
                'Content-Type' : 'application/json'
            }
        );
        const requestOptions = new RequestOptions(
            {
                headers : headers,
                body : JSON.stringify(data)
            }
        );

        this.http.delete(url, requestOptions)
                  .subscribe(
                      response => {
                          switch(response.status) {
                                case Response.SUCCESS:
                                    component.getToastr().success('Deleted successfully');
                                    component.getCollectionView().remove(data);
                                    break;
                                default: break;
                          }
                      },
                      error => {
                          component.getToastr().error('Server error');
                      }
                  );
    }

    public initCombobox(component : StockOutAddComponent, 
                        cmb : wijmo.input.ComboBox) {
        const url = localStorage.getItem('api_url') + StockOutService.API_URL_USER + 'list';
        const headers = new Headers({
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
        });
        const requestOptions = new RequestOptions({headers : headers});
        
        this.http.get(url, requestOptions)
            .subscribe(
                response => {
                    cmb.itemsSource = response.json();
                    cmb.displayMemberPath = 'FullName';
                    cmb.selectedValuePath = 'Id';
                },
                error => {
                    console.log('error');
                }
            )
    }

    public initAccount(component : StockOutAddComponent, cmb : wijmo.input.ComboBox) : void {
            const url = localStorage.getItem('api_url') + StockOutService.ACCOUNT_API_URL + 'list';
            const headers = new Headers({
                'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
            });
            const requestOptions = new RequestOptions({headers : headers});
            
            this.http.get(url, requestOptions)
                .subscribe(
                    response => {
                        cmb.itemsSource = response.json();
                        cmb.displayMemberPath = "Account";
                        cmb.selectedValuePath = "Id";
                        this.filterAccount(cmb);
                    },
                    error => {
                        console.log('error');
                    }
                )
    }

    public updatePageButtons(component : StockOutComponent) : void {
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

     private filterAccount(cmb : wijmo.input.ComboBox) : void {
        var src = [];
        for(var c of cmb.itemsSource) {
            if(c.AccountType == 'EXPENSES') {
                src.push(c);
            }
        }
        cmb.itemsSource = src;
    }
}