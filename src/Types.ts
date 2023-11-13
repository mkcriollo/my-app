/* COMMENTS */
// add to album Type, setDrag Image type, setSelectImgs Type, photo Type ??

export interface IPhoto {
  description: string;
  id: number;
  title: string;
  url: string;
}

export interface IPhotoListProps {
  allPhotos?: IPhoto[];
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

// maybe extend to Photoprops
export interface ISingleImageProps {
  canDrag: boolean;
  amountOfCols: number;
  addToAlbum?: any;
  select?: {
    selectMode: boolean;
    setSelectImgs: any;
    selectImgs: IPhoto[];
  };
  handleSelectMode: (photo: IPhoto) => void;
  drag: (photo: IPhoto) => void;
  photo?: any;
  photoList: IPhoto[];
}
