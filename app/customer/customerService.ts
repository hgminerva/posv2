import{Component, Injectable} from 'angular2/core';
import{Http, Headers, RequestOptions} from 'angular2/http';
import{CustomerComponent} from './customer';

@Injectable()
export class CustomerService {
    public static page : number = 0;
    private static GRID_LENGTH = 10;
    private customers : wijmo.collections.ObservableArray;

    public constructor(private http : Http) {
        this.customers = new wijmo.collections.ObservableArray();
    }

    public initCustomers(customerComponent : CustomerComponent,
                            customerView : wijmo.collections.CollectionView) : void {
        const url = localStorage.getItem('api_url') + '/api/customer/list';
        const headers = new Headers({'Authorization': 'Bearer ' + localStorage.getItem('access_toen') });
        const options = new RequestOptions();

        this.http.get(url, options)
            .subscribe(
                response => {
                    this.customers = response.json();
                    this.displayDataToGrid(customerView);
                },
                error => {
                    customerComponent.getToastr().error('Server error', '');
                }
            )
    }

    public displayDataToGrid(customerView : wijmo.collections.CollectionView) {
        if(this.customers.length > 0) {
            const data = new wijmo.collections.ObservableArray();
            for(var i = 0; i < CustomerService.GRID_LENGTH; i++) {
                if(CustomerService.page < this.customers.length ){
                    data.push(this.customers[CustomerService.page++]);
                }
                else {
                    break;
                }
                customerView.sourceCollection = data;
            }
        }
    }
}