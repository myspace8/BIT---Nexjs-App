// import { useRouter } from "next/router";
"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import noImage from "../../../public/noImage.png";
import { usePathname } from "next/navigation";
import { getOneData } from "@/firebase/firestore/getOneData";

const id = () => {
  const [post, setPost] = useState();
  const pathname = usePathname(id);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getOneData(pathname.split("/")[2]);
        setPost(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost(pathname);
  }, [pathname]);

  return (
    <Suspense fallback={<div>Loading posts....</div>}>
      <div>
        <Suspense fallback={<div>Loading image</div>}>
          <img
            src={post?.img_url || noImage}
            className="aspect-video w-full m-0"
          />
        </Suspense>
        <Suspense fallback={<div>loading text...</div>}>
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
            {post?.title}
          </h2>
          <div className="flex flex-col gap-3">{post?.description} </div>
        </Suspense>
      </div>
    </Suspense>
  );
};

export default id;
