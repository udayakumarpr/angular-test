import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  // Exa-1: Same page Template reference
  // decorater ('template refrence') variable : type of ;
  @ViewChild('divData') divData: ElementRef;
  @ViewChild(ChildComponent, {static: false}) child: ChildComponent;
  
  ngAfterViewInit(){
      // Exa-1: Same page Template reference
    console.log(this.divData.nativeElement);
    var paraTxt = this.divData.nativeElement;
    paraTxt.classList = "ViewChildClass";
    paraTxt.style.color = "white";
    paraTxt.innerHTML = "A ViewChild is a component, directive, or element as a part of a template. If we want to access a child component, directive, DOM element inside the parent component, we use the decorator @ViewChild() in Angular";    
  
    // Exa-2: Updatethe Child Component DOM
    console.log(this.child);
  }

  changeChildValue(){
    this.child.para = "Its text updated via parent"
  }
  clickChildMethod(){
    this.child.alertme();
  }
}
