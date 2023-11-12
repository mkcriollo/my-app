import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhotos from "../Actions/fetchPhotos";
import { IPhoto, IPhotoListProps } from "../Types";
import { Container } from "@chakra-ui/react";
import PhotoList from "./PhotoList";

const Gallery = (props: any): JSX.Element => {
  const results = useQuery(["images"], fetchPhotos);
  const { addToAlbum, setDragImage, dragImage } = props;

  // if results is not loaded show a loader
  if (results.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const photos: IPhoto[] = results.data.photos;

  const photoListProps: IPhotoListProps = {
    photoList: photos,
    colTemplate: "repeat(4,1fr)",
    gap: 15,
    addToAlbum,
    dragState: { setDragImage, dragImage },
    canDrag: true,
  };

  return (
    <Container overflow="scroll" className="gallery">
      <PhotoList {...photoListProps} />
    </Container>
  );
};

export default Gallery;
