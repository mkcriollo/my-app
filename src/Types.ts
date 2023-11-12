/* COMMENTS */
// add to album Type, setDrag Image type, setSelectImgs Type ??

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
  dragState: {
    dragImage: IPhoto;
    setDragImage: any;
  };
  canDrag: boolean;
  select?: {
    selectMode: boolean;
    setSelectImgs: any;
    selectImgs: IPhoto[];
  };
}
