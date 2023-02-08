import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios.config";
import ImageSkeleton from "../shared/imageSkeleton";

const UserDetails = ({ id, setUserId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <ImageSkeleton isCenter />;
  return (
    <div className="flex flex-col justify-center">
      <div className="cursor-pointer" onClick={() => setUserId(-1)}>
        back
      </div>
      <img src={user.image} alt="" />
    </div>
  );
};

export default UserDetails;
