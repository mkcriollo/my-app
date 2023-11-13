import React from "react";
import { GridItem, Image, Flex, Text, Box, Button } from "@chakra-ui/react";
import { IPhoto, ISingleImageProps } from "../Types";
import { MdAddToPhotos } from "react-icons/md";

const SinglePhoto = (props: ISingleImageProps): JSX.Element => {
  const {
    canDrag,
    amountOfCols,
    select,
    photo,
    handleSelectMode,
    drag,
    addToAlbum,
  } = props;
  const { url, id, title, description } = photo;

  const handleButtonAdd = (): void => {
    console.log(select?.selectImgs);
    if (!select?.selectImgs.includes(photo)) {
      addToAlbum(photo);
    }
  };
  return (
    <GridItem colSpan={{ base: canDrag ? Number(amountOfCols) : 1, lg: 1 }}>
      <Box
        p={{ base: canDrag ? "20px" : "0px", lg: "0px" }}
        background="#F0F0F0"
        borderRadius="6px"
      >
        <Image
          borderRadius={{ base: canDrag ? "6px" : "0px", lg: "0px" }}
          cursor={select?.selectMode ? "pointer" : "default"}
          id="single-image"
          draggable={canDrag}
          onDragStart={() => drag(photo)}
          src={url}
          key={id}
          alt={title}
          objectFit="cover"
          width="100%"
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
              background="#a3e7e7"
              onClick={() => handleButtonAdd()}
              _hover={{
                background: "#339f9f",
                border: "none",
                color: "white",
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
