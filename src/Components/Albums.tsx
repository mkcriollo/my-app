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
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Albums = (props: any): JSX.Element => {
  const { albumPhotos, setAlbumPhotos, setDragImage, dragImage, addToAlbum } =
    props;
  const [selectImgs, setSelectImgs] = useState<IPhoto[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);
  const [closedAlbum, setClosedAlbum] = useState<boolean>(false);

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

    if (albumWithoutSelectPhotos.length === 0) {
      setSelectMode(false);
    }
    setAlbumPhotos(albumWithoutSelectPhotos);
    setSelectImgs([]);
    // setClosedAlbum(true);
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
      // overflow="hidden"
      area={"album"}
      height="100%"
      minW="100%"
    >
      <Box
        background="#00cccb"
        borderRadius="6px"
        width="100%"
        h={{
          base: !closedAlbum ? "450px" : "fit-content",
          lg: !closedAlbum ? "80vh" : "fit-content",
        }}
        p={{ base: "40px", lg: "20px" }}
        mb={{ base: "30px", lg: "0px" }}
        onDrop={(ev) => drop(ev)}
        onDragOver={(ev) => allowDrop(ev)}
        overflow="hidden"
      >
        <Flex justifyContent="space-between" alignItems="baseline" mb="40px">
          <Text fontWeight="bold" fontSize="medium">
            Album Generator
          </Text>
          <Flex alignItems="center">
            {albumPhotos.length > 0 && (
              <>
                {!closedAlbum && (
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
                    mr="10px"
                  >
                    {selectMode ? "Cancel" : "Select"}
                  </Button>
                )}
                {!closedAlbum ? (
                  <BiDownArrow
                    cursor="pointer"
                    onClick={() => setClosedAlbum(true)}
                  />
                ) : (
                  <BiUpArrow
                    cursor="pointer"
                    onClick={() => setClosedAlbum(false)}
                  />
                )}
              </>
            )}
          </Flex>
        </Flex>
        {albumPhotos.length === 0 && (
          <Text fontSize="2xl" color="white" fontWeight="bold">
            Add Some Photos Here!
          </Text>
        )}
        {selectMode && !closedAlbum && (
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
        {!closedAlbum ? (
          <Flex
            justifyContent="space-between"
            overflowY="auto"
            height={{ base: "300px", lg: "80%" }}
          >
            <Box width="50%">
              <PhotoList {...photoListProps}></PhotoList>
            </Box>
            <OrderedList width="50%" pl="20px">
              {albumPhotos.map((albumPhoto: IPhoto) => {
                const { title, id } = albumPhoto;
                return (
                  <ListItem fontWeight="bold" key={id}>
                    {title}
                  </ListItem>
                );
              })}
            </OrderedList>
          </Flex>
        ) : (
          <></>
        )}
      </Box>
    </GridItem>
  );
};

export default Albums;
