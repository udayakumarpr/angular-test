import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  isStructural: boolean = false;
  isAttribute: boolean = false;
  textSuccess: boolean = false;

  public directiveType: string[] = ['Component Directives', 'Structural Directives', 'Attribute Directives']

  showStructural(){
    this.isStructural = !this.isStructural;
  }
  showAttribute(){
    this.isAttribute = !this.isAttribute;
  }
  textGreen(){
    this.textSuccess = true;
  }

}
