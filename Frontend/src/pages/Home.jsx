import React from "react";
import { useFetchAllBlogs } from "../hooks/useFetchAllBlogs";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
const Home = () => {
  useFetchAllBlogs();
  const data = useSelector((store) => store.blog.allBlogs);

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
    <div className="bg-black min-h-screen">
      <div className="p-8 ">
        {data?.data.map((data) => (
          <Cards
            key={data._id}
            blogid={data.author}
            author={"anonymous"}
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

export default Home;
