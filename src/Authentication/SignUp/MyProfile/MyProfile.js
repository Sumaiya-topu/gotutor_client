import React, { useEffect, useState } from "react";
import { singleImageUpload } from "../../../Hooks/ImageUpload";
import AuthUser from "../../../Hooks/AuthUser";
import server_url from "../../../config";
import GetUserHook from "../../../Hooks/FetchFunction/GetUserHook";
import Loader from "../../../ReusableComponents/Loader";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  const { userInfo } = AuthUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log("userinfo from profile", userInfo);
  const BASE_URL = `${server_url}/users/${userInfo?._id}`;
  useEffect(() => {
    GetUserHook(BASE_URL, setUser, setIsUserLoading);
  }, [BASE_URL]);
  useEffect(() => {
    setImageUrl(user?.imageURL);
  }, [user]);
  const handleUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setImageUrl);
  };

  const handleChangeUploadImage = (data) => {
    console.log("image data", data);
    const newImage = {
      imageURL: imageUrl,
    };

    UpdateHooks(BASE_URL, newImage, true, "Profile picture updated");
  };

  // if (isUserLoading) {
  //   return <Loader></Loader>;
  // }
  return (
    <div className="w-2/3  mx-auto">
      <div className=" h-48 bg-[#D9D9D9]  rounded-b-lg"></div>
      <div>
        <div className="-mt-12 flex items-center justify-between">
          <div className="flex gap-x-2  items-end">
            {imageUrl ? (
              <img
                className=" rounded-full w-36 h-36 border-4 border-[#f5f8ff]"
                src={imageUrl}
                alt="This is profile pic"
              />
            ) : (
              <img
                className="rounded-full w-36 border-4 border-[#f5f8ff]"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
                }
                alt="This is profile pic"
              />
            )}
            <div>
              <form onSubmit={handleSubmit(handleChangeUploadImage)}>
                <input
                  {...register("imageUrl")}
                  onChange={handleUploadImage}
                  type={"file"}
                  className=" py-2 px-5 text-white bg-[#D9D9D9] font-medium rounded-md mt-4"
                />
                <button
                  type="submit"
                  className="text-xs py-2 px-5 mt-2 block bg-gradient-to-r bg-[#7839ff] rounded-md text-white font-medium cursor-pointer"
                >
                  Change
                </button>
              </form>
            </div>
          </div>
          <button className="py-2 px-10  bg-gradient-to-r bg-[#7839ff] rounded-md text-white font-medium cursor-pointer mt-5">
            Resume
          </button>
        </div>
        <div>
          <h2 className="text-lg font-medium mt-5">{userInfo.fullName}</h2>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
