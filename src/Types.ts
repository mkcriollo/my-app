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
  addToAlbum?: React.Dispatch<React.SetStateAction<any>>;
  dragState: {
    dragImage: IPhoto;
    setDragImage: React.Dispatch<React.SetStateAction<any>>;
  };
  canDrag: boolean;
  select?: {
    selectMode: boolean;
    setSelectImgs: React.Dispatch<React.SetStateAction<any>>;
    selectImgs: IPhoto[];
  };
}

export interface ISingleImageProps {
  canDrag: boolean;
  amountOfCols: number;
  addToAlbum?: any;
  select?: {
    selectMode: boolean;
    setSelectImgs: React.Dispatch<React.SetStateAction<any>>;
    selectImgs: IPhoto[];
  };
  handleSelectMode: (photo: IPhoto) => void;
  drag: (photo: IPhoto) => void;
  photo?: any;
  photoList: IPhoto[];
}

export interface ISectionProps {
  albumPhotos: IPhoto[];
  setAlbumPhotos: React.Dispatch<React.SetStateAction<IPhoto[] | []>>;
  addToAlbum: any;
  dragImage: any;
  setDragImage: React.Dispatch<React.SetStateAction<IPhoto | undefined>>;
}
