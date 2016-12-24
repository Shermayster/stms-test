/**
 * Created by sherm on 12/23/2016.
 */

export interface Album {
  title: string;
  cover: string;
}

export interface Song {
  title: string;
  album: Album;
  artist: Artist;
  comment: string;
  inFavorite: boolean;
}

export interface Artist {
  name: string;
  picture_small: string;
}
