import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private http: HttpClient) { }

  getComments():Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.commentsUrl)
  }
}
