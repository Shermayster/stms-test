import { Song } from './artist.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(songs: Song[]): Song[] {
    return songs.sort();
  }
}
