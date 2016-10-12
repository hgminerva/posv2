import { Directive, ElementRef, Input, Renderer } from 'angular2/core';
import * as wjNg2FlexGrid from 'wijmo/wijmo.angular2.grid';

@Directive({
    selector: '[myGrid]'
})

export class myGridDirective {
      a :  wijmo.grid.FlexGrid ;
    constructor(private el: ElementRef, private renderer : Renderer) {
        this.a = <wijmo.grid.FlexGrid>el.nativeElement;
        this.a.allowAddNew = true;
         console.log('grid here' + this.a.itemsSource);
    }
}