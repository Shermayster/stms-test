import { Song } from "./artist.interface";
import { Injectable } from "@angular/core";
/**
 * Created by sherm on 12/23/2016.
 */


@Injectable()
export class DataService {
  songs: Song[] = [];
  constructor() { }

  // Favorite Songs data functions
  getFavoriteSongs(): Song[] {
    return this.songs;
  }

  // add Song to FavoriteSongs
  pushSongToFavoriteSongs(song: Song): void {
    // check if song in FavoriteSongs
    if (!this.songs.find((favSong: Song) => favSong.title === song.title)) {
      this.songs.push(song);
    }
  }

  // update favorite Song
  updateSong(song: Song): void {
    let songIndex: number = this.songs.findIndex((favSong: Song) => favSong.title === song.title);
    this.songs[songIndex] = song;
  }

  //delete song from Favorite Songs
  deleteSongsFromFavorite(song: Song): void {
    this.songs = this.songs.filter((favSong: Song) => favSong.title !== song.title);
  }

  sortSongsByTitle(songs: Song[]): Song[] {
    let sortedSongs = songs.sort(function (current, next) {
      return current.title.localeCompare(next.title);
    });
    return sortedSongs;
  }


  reverseSortSongsByTitle(songs: Song[]): Song[] {
    let sortedSongs = songs.sort(function (current, next) {
      return next.title.localeCompare(current.title);
    });
    return sortedSongs;
  }
}
