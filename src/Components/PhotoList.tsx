import React from "react";
import { IPhoto, IPhotoListProps, ISingleImageProps } from "../Types";
import { Grid, GridItem } from "@chakra-ui/react";
import SinglePhoto from "./SinglePhoto";

const PhotoList = ({
  photoList,
  colTemplate,
  gap,
  dragState,
  canDrag,
  select,
  addToAlbum,
  allPhotos,
}: IPhotoListProps): JSX.Element => {
  const { setDragImage } = dragState;

  // START COLS SPAN
  const colArr = colTemplate.match(/\d/g);
  let amountOfCols: any = null;

  if (colArr !== null) {
    amountOfCols = colArr[0];
  }
  // END COLS SPAN

  const drag = (photo: IPhoto): void => {
    setDragImage(photo);
  };

  const handleSelectMode = (photo: IPhoto): void => {
    if (select?.selectMode) {
      // Add to Select Imgs
      if (!select?.selectImgs.includes(photo)) {
        const newSelectedImgs = [...select?.selectImgs, photo];
        select.setSelectImgs(newSelectedImgs);
      } else {
        // Remove from Select Imgs
        const newSelectImgs = select?.selectImgs.filter(
          (curr: IPhoto) => curr.id !== photo.id
        );
        select.setSelectImgs(newSelectImgs);
      }
    }
  };

  const singleImageProps: ISingleImageProps = {
    canDrag,
    amountOfCols,
    select,
    handleSelectMode,
    drag,
    addToAlbum,
    photoList,
  };

  // Shows either Album Photos OR Gallery
  const photosToDisplay = allPhotos !== undefined ? allPhotos : photoList;

  return (
    <Grid templateColumns={colTemplate} gap={gap}>
      {photosToDisplay?.map((photo: IPhoto) => {
        return (
          <GridItem
            colSpan={{ base: canDrag ? Number(amountOfCols) : 1, lg: 1 }}
            key={photo.id}
          >
            <SinglePhoto {...singleImageProps} photo={photo} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PhotoList;
