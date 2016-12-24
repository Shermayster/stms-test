import { DataService } from './../shared/data.service';
import { Song } from './../shared/artist.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-table',
  templateUrl: './favorites-table.component.html',
  styleUrls: ['./favorites-table.component.css']
})
export class FavoritesTableComponent implements OnInit {
  songs: Song[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.songs = this.dataService.getFavoriteSongs();
  }

updateSong(song: Song) {
 this.dataService.updateSong(song);
}
}
