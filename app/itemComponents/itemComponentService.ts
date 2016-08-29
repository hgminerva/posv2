import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http'
import {Response} from '../response/response';
import {ItemComponentsComponent} from './itemComponents';

@Injectable()
export class ItemComponentService {
    private static API_URL_ITEM_COMPONENT : string = "/api/itemComponent/";

    public constructor(private http : Http) {}

    public listItemComponent(component : ItemComponentsComponent) : void {
        const url = localStorage.getItem('api_url') + ItemComponentService.API_URL_ITEM_COMPONENT + "list";
        const headers = new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('access_token')});
        const requestOptions = new RequestOptions();

        this.http.get(url, requestOptions)
                 .subscribe(
                     response=> {
                         switch(response.status) {
                             case Response.SUCCESS: 
                                    component.getCollectionView().sourceCollection = response.json();
                                    this.checkPageCount(component.getCollectionView());
                                    break;
                             default: break;
                         }
                     },
                     error => {
                         component.getToastr().error('Server error');
                     }
                )
    }

    public deleteCollection(data, component : ItemComponentsComponent) : void {
        const url : string = localStorage.getItem('api_url') + ItemComponentService.API_URL_ITEM_COMPONENT + "delete";
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

    private checkPageCount(collectionView: wijmo.collections.CollectionView) : void {
        if(collectionView.pageCount == 1 || collectionView.itemCount == 0){
            document.getElementById('btnBack').setAttribute('disabled', 'disabled');
            document.getElementById('btnNext').setAttribute('disabled', 'disabled');
        }
    }
}