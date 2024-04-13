import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { FilterPipeComponent } from './pipes/filter-pipe/filter-pipe.component';
import { ViewChildComponent } from './viewchild/view-child/view-child.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren/viewchildren.component';

const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'task'},
  {path: 'task', component: TaskComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'template-driven', component: TemplateDrivenFormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'pipe-filter', component: FilterPipeComponent},
  {path: 'api-test', loadChildren: () => import('../app/api-test/api-test.module').then(m => m.ApiTestModule)},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'view-children', component: ViewchildrenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
