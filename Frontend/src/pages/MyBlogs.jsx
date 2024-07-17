import React from "react";
import { useSelector } from "react-redux";
import { Typewriter } from "react-simple-typewriter";
import Cards from "../components/Cards";
import { useFetchUserBlogs } from "../hooks/useFetchUserBlogs";
const MyBlogs = () => {
  const { username, _id } = useSelector((store) => store.config.userInfo);
  useFetchUserBlogs(_id);
  const data = useSelector((store) => store.blog.userBlogs);

  const getDate = (date) => {
    const dateTime = new Date(date);

    // Extract date components
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Month is 0-based, so add 1
    const day = dateTime.getDate();

    return `${year}-${month}-${day}`;
  };

  const getTime = (date) => {
    const dateTime = new Date(date);
    // Extract time components
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    return `${hours}:${minutes}`;
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className=" text-center font-mono text-3xl font-bold">
        Hello👋
        <Typewriter
          words={[username, "Amazing Day For You"]}
          loop={9}
          cursor={true}
        />
      </h1>
      <div className="flex flex-wrap p-5 ">
        {data?.data.map((data) => (
          <Cards
            key={data._id}
            blogid={data._id}
            id={data.author}
            author={username}
            date={getDate(data.updatedAt)}
            time={getTime(data.updatedAt)}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
