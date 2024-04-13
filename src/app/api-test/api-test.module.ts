import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiTestRoutingModule } from './api-test-routing.module';
import { ApiTestComponent } from './api-test.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './component/header/header.component';
import { AlbumComponent } from './component/album/album.component';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { AlbumService } from './services/album.service';
import { CommentsService } from './services/comments.service';
import { PhotosService } from './services/photos.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDisplayComponent } from './component/post-display/post-display.component';
import { PostCreateComponent } from './component/post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';


@NgModule({
  declarations: [
    ApiTestComponent, 
    HomeComponent, 
    PostsComponent, 
    AlbumsComponent, 
    AboutComponent, 
    HeaderComponent, 
    AlbumComponent,
    PostDisplayComponent,
    PostCreateComponent,
    UserComponent,
    HeaderComponent,
    ],
  imports: [
    CommonModule,
    ApiTestRoutingModule,
    HttpClientModule,  
    FormsModule  
  ],
  providers: [PostsService, UsersService, AlbumService, CommentsService, PhotosService]
})
export class ApiTestModule { }
