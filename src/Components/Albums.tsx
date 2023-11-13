import React, { useState } from "react";
import {
  Flex,
  Box,
  OrderedList,
  ListItem,
  Button,
  Text,
  GridItem,
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
    gap: 2,
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
    <GridItem
      colSpan={{ base: 3, lg: 1 }}
      overflow="hidden"
      area={"album"}
      minW="100%"
    >
      <Box
        background="#00cccb"
        borderRadius="6px"
        width="100%"
        h={{ base: "fit-content", lg: "80vh" }}
        p={{ base: "40px", lg: "20px" }}
        mb={{ base: "30px", lg: "0px" }}
        onDrop={(ev) => drop(ev)}
        onDragOver={(ev) => allowDrop(ev)}
      >
        <Flex justifyContent="space-between" alignItems="baseline" mb="40px">
          <Text fontWeight="bold" fontSize="medium">
            Album Generator
          </Text>
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
            p="20px"
            mb="30px"
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
              fontSize="18px"
            />
          </Flex>
        )}
        <Flex justifyContent="space-between">
          <Box width="50%">
            <PhotoList {...photoListProps}></PhotoList>
          </Box>
          <OrderedList width="50%" pl="20px">
            {albumPhotos.map((albumPhoto: IPhoto) => {
              const { title } = albumPhoto;
              return <ListItem fontWeight="bold">{title}</ListItem>;
            })}
          </OrderedList>
        </Flex>
      </Box>
    </GridItem>
  );
};

export default Albums;
