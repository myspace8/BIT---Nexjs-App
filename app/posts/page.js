"use client";
import React, { useEffect, useState, Suspense } from "react";
import PostCard from "./postcard";
import getAllData from "@/firebase/firestore/getAllData";

const Posts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllData();
        setItems(data);
        console.log(items);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
        All posts
      </h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {items.map((doc) => (
            <PostCard postdetails={doc} key={doc.id} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Posts;
