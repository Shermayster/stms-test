import {DataService} from './../shared/data.service';
import {Component, OnInit} from '@angular/core';
import {HttpService} from "../shared/http.service";
import {Song} from "../shared/artist.interface";

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  songs: Song[];
  favSongs: Song[];
  sorted: boolean = false;

  constructor(private httpService: HttpService, private dataService: DataService) {
  }

  ngOnInit() {
    this.favSongs = this.dataService.getFavoriteSongs();
    this.getSongsFromApi('depeche mode');
  }

  checkIfSongsInFavorite(songs: Song[]): Song[] {
    return songs.map(song => {
      if (this.favSongs.find(favSong => favSong.title === song.title)) {
        song.inFavorite = true;
      } else {
        song.inFavorite = false;
      }
      song.comment = '';
      return song;
    });
  }

  getSongsFromApi(artist: string) {
    this.httpService.getQuote(artist)
      .subscribe(res => {
        this.songs = res;
        this.songs = this.checkIfSongsInFavorite(this.songs);
      });
  }

  addSongToFavorite(song: Song) {
    this.dataService.pushSongToFavoriteSongs(song);
  }

  deleteSongFromFavorite(song: Song) {
    this.dataService.deleteSongsFromFavorite(song);
  }

  sortSongs() {
    if (!this.sorted) {
      this.songs = this.dataService.sortSongsByTitle(this.songs);
      this.sorted = true;
    } else {
      this.songs = this.dataService.reverseSortSongsByTitle(this.songs);
      this.sorted = false;
    }
  }
}
