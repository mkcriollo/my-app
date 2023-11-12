/* COMMENTS */
// add to album Type ??

export interface IPhoto {
  description: string;
  id: number;
  title: string;
  url: string;
}

export interface IPhotoListProps {
  photoList: IPhoto[];
  colTemplate: string;
  gap: number;
  addToAlbum?: any;
}
