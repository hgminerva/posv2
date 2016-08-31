import {SystemTablesComponent} from '../systemTables';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Response} from '../../response/response';

@Injectable()
export class PayTypeService {
    private static API_URL_PAYTYPE : string = "/api/payType/";

    public constructor(private http : Http) {

    }

    public listPayType(component : SystemTablesComponent) : void {
        const url = localStorage.getItem('api_url') + PayTypeService.API_URL_PAYTYPE + "list";
        const headers = new Headers({
            'Authentication' : 'Bearer ' + localStorage.getItem('access_token')
        });
        const requestOptions = new RequestOptions(headers);    

        this.http.get(url, requestOptions)
                .subscribe(
                    response=> {
                        component.getPayTypeView().sourceCollection = response.json();
                        this.updatePageButtons(component);
                    },
                    error => {

                    }
                )

    }

     public updatePageButtons(component : SystemTablesComponent) : void {
        var currentPage = component.getPayTypeView().pageIndex;
        var totalPage = component.getPayTypeView().pageCount;
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