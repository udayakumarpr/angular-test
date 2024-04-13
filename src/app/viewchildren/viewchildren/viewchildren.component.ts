import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent {
  alertsArr = [];
  @ViewChild('div1', {static: true, read: ElementRef}) 
  div: { nativeElement: { innerHTML: string; style: string; }; };
  @ViewChildren(ChildrenComponent) alerts: QueryList<ChildrenComponent>;

  ngOnInit(){
    this.div.nativeElement.innerHTML = "Good Bye";
    console.log((this.div.nativeElement.style = "color: red"), "div1")
  }

  ngAfterViewInit(){
    this.alertsArr = this.alerts.toArray();
    console.log('childrenCount', this.alertsArr);
  }

  showAlert(step: number){
    this.alertsArr[step - 1].show();
  }
}
