import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhotos from "../Actions/fetchPhotos";
import { IPhoto, IPhotoListProps, ISectionProps } from "../Types";
import { Flex, GridItem, Skeleton } from "@chakra-ui/react";

const PhotoList = React.lazy<any>(() => import("./PhotoList"));

const Gallery = (props: ISectionProps): JSX.Element => {
  const results = useQuery(["images", 100, 0], fetchPhotos);

  const { addToAlbum, setDragImage, dragImage, albumPhotos } = props;

  if (results?.isLoading) {
    return (
      <GridItem area={"gallery"} colSpan={{ base: 3, lg: 2 }}>
        <Skeleton
          h="100vh"
          startColor="lightgray"
          borderRadius="10px"
          mr={{ base: "0px", lg: "20px" }}
        />
      </GridItem>
    );
  }

  const photos: IPhoto[] = results?.data.photos;

  const photoListProps: IPhotoListProps = {
    allPhotos: photos,
    photoList: albumPhotos,
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
      <React.Suspense>
        <Flex flexDir="column" alignItems="center">
          <PhotoList {...photoListProps} />
        </Flex>
      </React.Suspense>
    </GridItem>
  );
};

export default Gallery;
