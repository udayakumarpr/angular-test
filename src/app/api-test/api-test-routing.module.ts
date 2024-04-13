import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestComponent } from './api-test.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: ApiTestComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'albums', component: AlbumsComponent},
      {path: 'about', component: AboutComponent}
    ]
  },
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiTestRoutingModule { }
