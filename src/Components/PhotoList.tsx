import React from "react";
import { IPhoto, IPhotoListProps } from "../Types";
import { Image, Grid, Box, GridItem } from "@chakra-ui/react";

const PhotoList = ({
  photoList,
  colTemplate,
  gap,
  dragState,
  canDrag,
  select,
}: IPhotoListProps): JSX.Element => {
  const { setDragImage } = dragState;

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

  return (
    <Grid templateColumns={colTemplate} gap={gap}>
      {photoList.map((photo: IPhoto) => {
        const { url, id, title } = photo;
        return (
          <Image
            cursor={select?.selectMode ? "pointer" : "default"}
            id="single-image"
            draggable={canDrag}
            onDragStart={() => drag(photo)}
            src={url}
            key={id}
            alt={title}
            objectFit="cover"
            opacity={
              select?.selectImgs.some((curr: IPhoto) => {
                return curr.id === photo.id;
              })
                ? 0.5
                : 1
            }
            onClick={() => handleSelectMode(photo)}
          />
        );
      })}
    </Grid>
  );
};

export default PhotoList;
