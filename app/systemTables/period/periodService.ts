import {SystemTablesComponent} from '../systemTables';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Response} from '../../response/response';

@Injectable()
export class PeriodService {
    private static API_URL_PERIOD : string = "/api/period/";

    public constructor(private http : Http) {

    }

    public listPeriod(component : SystemTablesComponent) : void {
        const url = localStorage.getItem('api_url') + PeriodService.API_URL_PERIOD + "list";
        const headers = new Headers({
            'Authentication' : 'Bearer ' + localStorage.getItem('access_token')
        });
        const requestOptions = new RequestOptions(headers);    

        this.http.get(url, requestOptions)
                .subscribe(
                    response=> {
                        component.getPeriodView().sourceCollection = response.json();
                        this.checkPageCount(component.getPayTypeView());
                        console.log(component.getPeriodView().sourceCollection);
                    },
                    error => {

                    }
                )

    }

     private checkPageCount(collectionView: wijmo.collections.CollectionView) : void {
        if(collectionView.pageCount == 1 || collectionView.itemCount == 0){
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
        }
    }
}