import Link from "next/link";
import React from "react";
import noImage from "../../public/noImage.png";
import Image from "next/image";
const postcard = ({ postdetails }) => {
  console.log(postdetails);
  const { id, data } = postdetails;
  const { img_url, title, description } = data;
  return (
    <>
      <div className="flex flex-row gap-4 my-3 ">
        <img
          src={img_url || noImage}
          className=" aspect-[4/3] object-cover w-40"
        />
        <div>
          <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
            {title}
          </h2>
          <p>{description.slice(0, 250)}</p>
          <Link href={`/posts/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read more
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default postcard;
