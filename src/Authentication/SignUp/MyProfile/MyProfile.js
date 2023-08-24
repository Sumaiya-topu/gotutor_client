import React, { useEffect, useState } from "react";
import { singleImageUpload } from "../../../Hooks/ImageUpload";
import AuthUser from "../../../Hooks/AuthUser";
import server_url from "../../../config";
import GetUserHook from "../../../Hooks/FetchFunction/GetUserHook";
import Loader from "../../../ReusableComponents/Loader";

const MyProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  const { userInfo } = AuthUser();

  const BASE_URL = `${server_url}/users/${userInfo?._id}`;
  useEffect(() => {
    GetUserHook(BASE_URL, setUser, setIsUserLoading);
  }, [BASE_URL]);
  useEffect(() => {
    setImageUrl(user?.imageURL);
  }, [user]);
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setImageUrl);
    console.log("imageUrl", imageUrl);
  };

  // if (isUserLoading) {
  //   return <Loader></Loader>;
  // }
  return (
    <div>
      <div className="w-lg h-48 bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9] rounded-2xl"></div>
      <div>
        <div className="-mt-12">
          {imageUrl ? (
            <img
              className="rounded-full w-36 h-36 object-cover border-4 border-[#f5f8ff] mx-auto"
              src={imageUrl}
              alt="This is profile pic"
            />
          ) : (
            <img
              className="rounded-full w-36 border-4 border-[#f5f8ff] mx-auto"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
              }
              alt="This is profile pic"
            />
          )}
          <h2 className="text-lg font-medium mt-5">{userInfo.fullName}</h2>
        </div>
      </div>
      <input
        onChange={handleChangeUploadImage}
        type={"file"}
        // accept="image/png"
        accept="image/*"
        className="bg-gradient-to-r from-[#6069d3ef] to-[#67f6f3c9] py-2 px-7 text-white font-medium rounded-md mt-3"
      />
    </div>
  );
};

export default MyProfile;
