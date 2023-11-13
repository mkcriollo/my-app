import React from "react";
import { GridItem, Image, Flex, Text, Box, Button } from "@chakra-ui/react";
import { IPhoto, ISingleImageProps } from "../Types";

const SinglePhoto = (props: ISingleImageProps): JSX.Element => {
  const {
    canDrag,
    amountOfCols,
    select,
    photo,
    handleSelectMode,
    drag,
    addToAlbum,
    photoList,
  } = props;
  const { url, id, title, description } = photo;

  const handleButtonAdd = (): void => {
    if (!photoList.includes(photo)) {
      addToAlbum(photo);
    }
  };

  return (
    <GridItem colSpan={{ base: canDrag ? Number(amountOfCols) : 1, lg: 1 }}>
      <Box
        p={{ base: canDrag ? "20px" : "0px", lg: "0px" }}
        background="#F0F0F0"
        borderRadius="6px"
        maxH={{ lg: "200px" }}
        maxW={{ lg: "200px" }}
      >
        <Image
          loading="lazy"
          fallbackSrc="https://via.placeholder.com/200"
          maxH={{ base: "500px", md: "900px", lg: "200px" }}
          maxW={{ base: "500px", md: "900px", lg: "200px" }}
          borderRadius={{ base: canDrag ? "6px" : "0px", lg: "0px" }}
          cursor={select?.selectMode ? "pointer" : "default"}
          id="single-image"
          draggable={canDrag}
          onDragStart={() => drag(photo)}
          src={url}
          key={id}
          alt={title}
          objectFit="cover"
          width={{
            base: "100%",
            md: "100%",
            lg: "100%",
          }}
          opacity={
            select?.selectImgs.some((curr: IPhoto) => {
              return curr.id === photo.id;
            })
              ? 0.5
              : 1
          }
          onClick={() => handleSelectMode(photo)}
        />
        {canDrag && (
          <Flex
            display={{ base: "flex", lg: "none" }}
            h="200px"
            background="#F0F0F0"
            justifyContent="space-between"
            flexDirection="column"
            p="15px 0px"
          >
            <Text fontSize="2xl" fontWeight="bold">
              {title}
            </Text>
            <Text>{description}</Text>
            <Button
              borderRadius="6px"
              p="15px"
              background="#339f9f"
              color="white"
              onClick={() => handleButtonAdd()}
              _hover={{
                background: "#a3e7e7",
                border: "none",
                color: "black",
              }}
            >
              Add to Album
            </Button>
          </Flex>
        )}
      </Box>
    </GridItem>
  );
};

export default SinglePhoto;
