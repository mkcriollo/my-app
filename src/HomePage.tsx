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
    <Grid
      templateAreas={{
        base: `"album" "gallery"`,
        lg: `"gallery album"`,
      }}
      templateColumns="repeat(3, 1fr)"
      height="100vh"
      overflow="hidden"
      mt="20px"
    >
      <Gallery {...props} />
      <Albums {...props} />
    </Grid>
  );
};

export default HomePage;
