import React, { useState } from "react";
import {
  Flex,
  Box,
  Container,
  OrderedList,
  ListItem,
  Button,
  Text,
} from "@chakra-ui/react";
import { IPhoto, IPhotoListProps } from "../Types";
import { BsTrash3 } from "react-icons/bs";
import PhotoList from "./PhotoList";

const Albums = (props: any): JSX.Element => {
  const { albumPhotos, setAlbumPhotos, setDragImage, dragImage, addToAlbum } =
    props;
  const [selectImgs, setSelectImgs] = useState<IPhoto[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);

  // Handle Image Drop
  const drop = (ev: any): void => {
    ev.preventDefault();
    if (!albumPhotos.includes(dragImage)) {
      addToAlbum(dragImage);
    }
  };

  const allowDrop = (ev: any): void => {
    ev.preventDefault();
  };

  const handleSelectMode = (): void => {
    setSelectMode(!selectMode);
    setSelectImgs([]);
  };

  // Delete Photos from Album
  const handleDeleteSelectPhotos = (): void => {
    const albumWithoutSelectPhotos = albumPhotos.filter(
      (ele: IPhoto) => !selectImgs.includes(ele)
    );
    setAlbumPhotos(albumWithoutSelectPhotos);
    setSelectImgs([]);
  };

  const photoListProps: IPhotoListProps = {
    photoList: albumPhotos,
    colTemplate: "repeat(3,1fr)",
    gap: 6,
    dragState: {
      dragImage,
      setDragImage,
    },
    canDrag: false,
    select: {
      selectMode,
      setSelectImgs,
      selectImgs,
    },
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
      <Flex justifyContent="space-between" alignItems="center">
        <h3>Album Generator</h3>
        {albumPhotos.length > 0 && (
          <Button
            cursor="pointer"
            onClick={() => handleSelectMode()}
            borderRadius="6px"
            background="#a3e7e7"
            border="none"
            _hover={{
              background: "#339f9f",
              border: "none",
              color: "white",
            }}
            p="5px 10px"
          >
            {selectMode ? "Cancel" : "Select"}
          </Button>
        )}
      </Flex>
      {selectMode && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          border="1px solid black"
          p="10px"
          mt="10px"
          mb="10px"
          boxSizing="border-box"
          borderRadius="7px"
          background="#a3e7e7"
        >
          <Text>
            {selectImgs.length === 0
              ? "Select Images"
              : `${selectImgs.length} Photos Selected`}
          </Text>
          <BsTrash3
            onClick={() => handleDeleteSelectPhotos()}
            cursor="pointer"
          />
        </Flex>
      )}
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
