import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipeComponent } from './pipes/filter-pipe/filter-pipe.component';
import { ViewChildComponent } from './viewchild/view-child/view-child.component';
import { ChildComponent } from './viewchild/child/child.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren/viewchildren.component';
import { ChildrenComponent } from './viewchildren/children/children.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DirectivesComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    FilterPipe,
    FilterPipeComponent,
    ViewChildComponent,
    ChildComponent,
    ViewchildrenComponent,
    ChildrenComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
