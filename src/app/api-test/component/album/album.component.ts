import { Component } from '@angular/core';
import { AlbumModel } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  albums: AlbumModel[];
  constructor(private albumService:AlbumService){}

  getAlbums():void{
    this.albumService.getAlbums().subscribe(albums => this.albums = albums)
  }

  ngOnInit(){
    this.getAlbums()
  }
}
