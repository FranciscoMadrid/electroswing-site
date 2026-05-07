export interface InfoConfig {
  info: InfoDetail[]
}

export interface InfoDetail {
  id: number,
  title: string,
  img: string,
  content: string
}

export interface Song {
  order: number;
  title: string;
  duration: string;
}

export interface Album {
  title: string;
  year: number;
  album_img: string;
  songs: Song[];
}

export interface Artist {
  id: number;
  name: string;
  img: string;
  background_img: string,
  description: string;
  albums: Album[];
}