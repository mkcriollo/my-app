const fetchPhotos = async () => {
  const apiRes = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos?limit=${100}`
  );

  if (!apiRes.ok) {
    throw new Error("Fetch Images not OK");
  }

  return apiRes.json();
};

export default fetchPhotos;
