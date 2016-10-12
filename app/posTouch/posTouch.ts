import {Component, OnInit, Inject} from 'angular2/core';
import {Router} from 'angular2/router';

import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {POSTouchService} from '../posTouch/POSTouchService';

@Component({
    selector: 'posTouch',
    templateUrl: 'app/posTouch/posTouch.html',
    providers: [POSTouchService, ToastsManager],
     directives: [ 
                 wjNg2FlexGrid.WjFlexGrid, 
                 wjNg2FlexGrid.WjFlexGridColumn, 
                 wjNg2FlexGrid.WjFlexGridCellTemplate
               ]
})
export class POSTouchComponent implements OnInit {
    public page_tableGroup : number;
    public pages_tableGroup : number; 
    
    public page_table : number;
    public pages_table : number;

    public tableGroup = new Array(6);
    public tableGroupPicked = new Array(6);
    public dataTableGroup : wijmo.collections.ObservableArray;
    
    public table = new Array(46);
    public dataTable : wijmo.collections.ObservableArray;
    
    public router: Router;
    public toastr: ToastsManager;
    public posTouchService: POSTouchService;
    
    constructor( _router: Router, 
                 _toastr: ToastsManager,
                 @Inject(POSTouchService) _posTouchService: POSTouchService) {
        this.router = _router;
        this.toastr = _toastr;
        this.posTouchService = _posTouchService;             
    }    
    
    ngOnInit() {
        if (!localStorage.getItem('access_token')) {
            //this.router.navigate(['Login']);
        } else {
        
        }
        /*Else*/
         this.page_tableGroup = 1;
            
        this.getTableGroup();
        this.fillTableGroup();
            
        this.page_table = 1;
        this.pages_table = 1;
            
        for(var p=0; p<this.tableGroup.length; p++) {
            this.tableGroupPicked[p] = "";
        }
    }
   
   // ============
   // Table Groups 
   // ============
   
   getTableGroup() : void {
       this.dataTableGroup = this.posTouchService.getTableGroups(this);  
   }
    
   fillTableGroup() : void {
        let pages : number;
        let perPage : number;
        let record : number;
        let currentPage : number;
        let index : number;
        
        // Clean up the buttons of the table groups
        perPage = this.tableGroup.length;
        for(var i = 0; i < perPage; i++) {
            this.tableGroup[i] = "";
        }
        
        // Get the number of pages in the table groups
        if (this.pages_tableGroup == 1) {
            this.pages_tableGroup = this.dataTableGroup.length / perPage;
            if (this.pages_tableGroup - Math.floor(this.pages_tableGroup) > 0) {
                this.pages_tableGroup = Math.floor(this.pages_tableGroup) + 1;
            }
        }
        
        // Display the table groups per page    
        record = 1; index = 0;
        for(var i = 0; i < this.dataTableGroup.length; i++) {
            if((record % perPage)==0) {
                currentPage = 1
            } else {
                currentPage = Math.floor(record/perPage) + 1;
            }
            if(currentPage == this.page_tableGroup) {
                if(index <= perPage) {
                    this.tableGroup[index] = this.dataTableGroup[i].tableGroup;
                    index++;
                }
            }                
            record++;
        }
    }

    clickTableGroup(index : number) {
        let tableGroupId : number;
        let i = 0;
        let perPage : number;
        
        perPage = this.tableGroup.length;
        i = index + ((this.page_tableGroup - 1) * perPage)
        
        if(this.dataTableGroup.length > 0 && i <= this.dataTableGroup.length) {
            tableGroupId = this.dataTableGroup[i].id;
            this.dataTable = this.posTouchService.getTablesPerTableGroup(this,tableGroupId);  
            
            for(var p=0; p<this.tableGroup.length; p++) {
                if(p==index) {
                    this.tableGroupPicked[p] = "↑";
                } else {
                    this.tableGroupPicked[p] = "";
                } 
            }
        }

    }
    
    previousTableGroups() {
        this.page_tableGroup--;
        if (this.page_tableGroup < 1) this.page_tableGroup = 1;
        this.fillTableGroup();
    }

    nextTableGroups() {
        this.page_tableGroup++;
        if (this.page_tableGroup > this.pages_tableGroup) this.page_tableGroup = this.pages_tableGroup;
        this.fillTableGroup();
    }
    
    // ======
    // Tables
    // ======
    
    fillTable() {
        let pages : number;
        let perPage : number;
        let record : number;
        let currentPage : number;
        let index : number;
        
        // Clean up the buttons of the table
        perPage = this.table.length;
        for(var i = 0; i < perPage; i++) {
            this.table[i] = "";
        }
        
        // Get the number of pages in the tables
        if (this.pages_table == 1) {
            this.pages_table = this.dataTable.length / perPage;
            if (this.pages_table - Math.floor(this.pages_table) > 0) {
                this.pages_table = Math.floor(this.pages_table) + 1;
            }
        }
        
        // Display the tables per page    
        record = 1; index = 0;
        for(var i = 0; i < this.dataTable.length; i++) {
            if((record % perPage)==0) {
                currentPage = 1
            } else {
                currentPage = Math.floor(record/perPage) + 1;
            }
            if(currentPage == this.page_table) {
                if(index <= perPage) {
                    this.table[index] = this.dataTable[i].tableCode;
                    index++;
                }
            }                
            record++;
        }
    }
    
    previousTables() {
        this.page_table--;
        if (this.page_table < 1) this.page_table = 1;
        this.fillTable();
    }
    
    nextTables() {
        this.page_table++;
        if (this.page_table > this.pages_table) this.page_table = this.pages_table;
        this.fillTable();
    }
    
    clickTable(index : number) {
        
    }
    
    clickTableOverTheCounter() {
        this.router.navigate(['PosTouchDetail']);
    }
    
    clickTableDelivery() {
        
    }
}