import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchPhotos from "../Actions/fetchPhotos";

export default function Gallery() {
  const results = useQuery(["images"], fetchPhotos);

  // if results is not loaded show a loader
  if (results.isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const photos = results.data.photos;

  return <div>Gallery</div>;
}
