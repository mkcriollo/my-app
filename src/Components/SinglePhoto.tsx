import React from "react";
import { GridItem, Image, Flex, Text } from "@chakra-ui/react";
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
  const { url, id, title } = photo;
  return (
    <GridItem colSpan={{ base: canDrag ? Number(amountOfCols) : 1, lg: 1 }}>
      <Image
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
          h="100px"
          background="lightgray"
          justifyContent="space-between"
          alignItems="center"
          p="0px 15px"
        >
          <Text fontSize="14px" fontWeight="bold">
            {title}
          </Text>
          <MdAddToPhotos
            fontSize="18px"
            cursor="pointer"
            onClick={() => addToAlbum(photo)}
          />
        </Flex>
      )}
    </GridItem>
  );
};

export default SinglePhoto;
