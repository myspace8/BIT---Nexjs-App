"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Posts",
      link: "/posts",
    },
  ];
  //   console.log(router.pathname);
  return (
    <div>
      <ul className="flex gap-4 py-5 px-6 w-100 items-center justify-center ">
        {navItems.map((item, index) => {
          return (
            <li
              key={index}
              className="border-solid border-transparent hover:border-black border-b-2"
            >
              <Link className=" text-xl " href={item.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
