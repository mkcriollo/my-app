const fetchPhotos = async ({ queryKey }: { queryKey: any }) => {
  const limit = queryKey[1];
  const offset = queryKey[2];

  const apiRes = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`
  );

  if (!apiRes.ok) {
    throw new Error("Fetch Images not OK");
  }

  return apiRes.json();
};

export default fetchPhotos;
