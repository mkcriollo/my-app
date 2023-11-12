import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhotos from "../Actions/fetchPhotos";
import { IPhoto, IPhotoListProps } from "../Types";
import { GridItem, Skeleton } from "@chakra-ui/react";
import PhotoList from "./PhotoList";

const Gallery = (props: any): JSX.Element => {
  const results = useQuery(["images"], fetchPhotos);
  const { addToAlbum, setDragImage, dragImage } = props;

  // if results is not loaded show a loader
  if (results.isLoading) {
    return (
      <GridItem area={"gallery"} colSpan={{ base: 3, lg: 2 }}>
        <Skeleton h="100vh" startColor="lightgray" borderRadius="10px" />
      </GridItem>
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
    <GridItem
      colSpan={{ base: 3, lg: 2 }}
      overflow="scroll"
      area={"gallery"}
      mr={{ base: "0px", lg: "20px" }}
    >
      <PhotoList {...photoListProps} />
    </GridItem>
  );
};

export default Gallery;
