import React from "react";
import { IPhoto, IPhotoListProps } from "../Types";
import { Image, Grid } from "@chakra-ui/react";

/* COMMENTS */
// AddtoAlbum only should work from gallery not album component

const PhotoList = ({
  photoList,
  colTemplate,
  gap,
  addToAlbum,
}: IPhotoListProps): JSX.Element => {
  return (
    <Grid templateColumns={colTemplate} gap={gap}>
      {photoList.map((photo: IPhoto) => {
        const { url, id, title } = photo;
        return (
          <Image
            src={url}
            w="100%"
            key={id}
            alt={title}
            objectFit="cover"
            onClick={() => addToAlbum(photo)}
          />
        );
      })}
    </Grid>
  );
};

export default PhotoList;
