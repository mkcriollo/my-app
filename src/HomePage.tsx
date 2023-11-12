import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import Gallery from "./Components/Gallery";
import Albums from "./Components/Albums";
import { IPhoto } from "./Types";

const HomePage = (): JSX.Element => {
  const [albumPhotos, setAlbumPhotos] = useState<IPhoto[] | []>([]);
  const [dragImage, setDragImage] = useState<IPhoto>();

  const addToAlbum = (photo: IPhoto) => {
    const newAlbum: IPhoto[] = [...albumPhotos, photo];
    setAlbumPhotos(newAlbum);
  };

  const props = {
    albumPhotos,
    setAlbumPhotos,
    addToAlbum,
    dragImage,
    setDragImage,
  };

  return (
    <Grid templateColumns="2fr 1fr" height="100vh" overflow="hidden" mt="10px">
      <Gallery {...props} />
      <Albums {...props} />
    </Grid>
  );
};

export default HomePage;
