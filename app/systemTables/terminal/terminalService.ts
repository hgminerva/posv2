import {SystemTablesComponent} from '../systemTables';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Response} from '../../response/response';

@Injectable()
export class TerminalService {
    private static API_URL_TERMINAL : string = "/api/terminal/";

    public constructor(private http : Http) {

    }

    public listTerminal(component : SystemTablesComponent) : void {
        const url = localStorage.getItem('api_url') + TerminalService.API_URL_TERMINAL + "list";
        const headers = new Headers({
            'Authentication' : 'Bearer ' + localStorage.getItem('access_token')
        });
        const requestOptions = new RequestOptions(headers);    

        this.http.get(url, requestOptions)
                .subscribe(
                    response=> {
                        component.getTerminalView().sourceCollection = response.json();
                        this.checkPageCount(component.getTerminalView());
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