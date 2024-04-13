import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.photosUrl)
  }
}
