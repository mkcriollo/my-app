import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhotos from "../Actions/fetchPhotos";
import { IPhoto } from "../Types";
import { Grid, GridItem, Image } from "@chakra-ui/react";

const Gallery = (props: any): JSX.Element => {
  const results = useQuery(["images"], fetchPhotos);
  const { addToAlbum } = props;

  // if results is not loaded show a loader
  if (results.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const photos: IPhoto[] = results.data.photos;

  return (
    <Grid
      templateColumns="repeat(4,1fr)"
      gap={7}
      overflow="scroll"
      className="gallery"
    >
      {photos.map((photo: IPhoto) => {
        const { url, title, id } = photo;
        return (
          <Image
            onClick={() => addToAlbum(photo)}
            key={id}
            src={url}
            alt={title}
            width="200px"
            height="200px"
            objectFit="cover"
          />
        );
      })}
    </Grid>
  );
};

export default Gallery;
