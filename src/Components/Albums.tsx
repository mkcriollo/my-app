import React from "react";
import { Flex, Box, Container, OrderedList, ListItem } from "@chakra-ui/react";
import { IPhoto } from "../Types";

const Albums = (props: any): JSX.Element => {
  const { albumPhotos } = props;

  return (
    <Container overflow="hidden" background="#00cccb" minH="100vh" p="20px">
      <h3>Album Generator</h3>
      <Flex>
        <Box></Box>
        <OrderedList>
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
