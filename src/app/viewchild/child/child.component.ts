import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  para = "Click on child, Child compontent Text";
  alertme(){
    alert(this.para);
  }
}
