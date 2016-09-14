import {Component, Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {StockInComponent} from './stockIn';
import {StockInAddComponent} from './stockInAdd';
import {Response} from '../response/response';

@Injectable()
export class StockInService {
    private static API_URL_STOCK_IN : string = "/api/transaction/stockIn/";
    public static API_URL_SUPPLIER : string = "/api/supplier/"
    public static API_URL_USER : string = "/api/user/";

    public constructor(private http : Http) {}

    public listStockIn(component : StockInComponent) : void {
        const url = localStorage.getItem('api_url') + StockInService. API_URL_STOCK_IN + "list";
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

    public deleteStockIn(data, component : StockInComponent) : void {
        const url : string = localStorage.getItem('api_url') + StockInService.API_URL_STOCK_IN + "delete";
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

    public initCombobox(component : StockInAddComponent, 
                        cmb : wijmo.input.ComboBox, 
                        api_url : string, 
                        display : string, 
                        selectedValue : string) {
        const url = localStorage.getItem('api_url') + api_url + 'list';
        const headers = new Headers({
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
        });
        const requestOptions = new RequestOptions({headers : headers});
        
        this.http.get(url, requestOptions)
            .subscribe(
                response => {
                    cmb.itemsSource = response.json();
                    cmb.displayMemberPath = display;
                    cmb.selectedValuePath = selectedValue;
                },
                error => {
                    console.log('error');
                }
            )
    }

   public updatePageButtons(component : StockInComponent) : void {
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