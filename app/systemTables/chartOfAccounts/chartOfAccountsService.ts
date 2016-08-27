import {SystemTablesComponent} from '../systemTables';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Response} from '../../response/response';

@Injectable()
export class ChartOfAccountsService {
    private static API_URL_ACCOUNTS : string = "";

    public constructor(private http : Http) {

    }

    public listChartOfAccounts(component : SystemTablesComponent) : void {
        const url = localStorage.getItem('api_url') + ChartOfAccountsService.API_URL_ACCOUNTS + "list";
        const headers = new Headers({
            'Authentication' : 'Bearer ' + localStorage.getItem('access_token')
        });
        const requestOptions = new RequestOptions(headers);    

        this.http.get(url, requestOptions)
                .subscribe(
                    response=> {

                    },
                    error => {

                    }
                )

    }

     private checkPageCount(customerView: wijmo.collections.CollectionView) : void {
        if(customerView.pageCount == 1 || customerView.itemCount == 0){
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}