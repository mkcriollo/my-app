import React from "react";
import { Flex, Box, Container, OrderedList, ListItem } from "@chakra-ui/react";
import { IPhoto, IPhotoListProps } from "../Types";
import PhotoList from "./PhotoList";

const Albums = (props: any): JSX.Element => {
  const { albumPhotos, setDragImage, dragImage, addToAlbum } = props;

  const photoListProps: IPhotoListProps = {
    photoList: albumPhotos,
    colTemplate: "repeat(3,1fr)",
    gap: 6,
    dragState: {
      dragImage,
      setDragImage,
    },
    canDrag: false,
  };

  const drop = (ev: any): void => {
    ev.preventDefault();
    addToAlbum(dragImage);
  };

  const allowDrop = (ev: any): void => {
    ev.preventDefault();
  };

  return (
    <Container
      overflow="hidden"
      background="#00cccb"
      h="80vh"
      ml="10px"
      mr="10px"
      pl="20px"
      pr="20px"
      onDrop={(ev) => drop(ev)}
      onDragOver={(ev) => allowDrop(ev)}
    >
      <h3>Album Generator</h3>
      <Flex>
        <Box w="50%">
          <PhotoList {...photoListProps}></PhotoList>
        </Box>
        <OrderedList w="50%">
          {albumPhotos.map((albumPhoto: IPhoto) => {
            const { title } = albumPhoto;
            return <ListItem>{title}</ListItem>;
          })}
        </OrderedList>
      </Flex>
    </Container>
  );
};

export default Albums;
