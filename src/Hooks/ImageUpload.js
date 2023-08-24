import server_url from "../config";

export const singleImageUpload = async (formData, setImageUrl) => {
  const imageBaseUrl = `${server_url}/upload/single-image-upload`;

  console.log("LE", formData);
  console.log("LE 2", setImageUrl);

  fetch(imageBaseUrl, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data);
      if (data.status === "success") {
        console.log("Response:", data);
        setImageUrl(data.url);
      }
    });
};
