import { Component, OnInit } from '@angular/core';

// Model
import { PostModel } from '../../models/post.model';
// Service
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public createPost: PostModel;
  
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(){
    this.createPost = new PostModel()
  }

  createAPost(): void {    
    this.createPost.title = this.createPost.title.trim();
    this.createPost.body = this.createPost.body.trim();
    console.log(this.createPost)
   this.postsService.addPost(this.createPost).subscribe();
  }

 
}