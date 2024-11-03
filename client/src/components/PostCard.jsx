import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full h-[350px] overflow-hidden border border-teal-500 hover:border-2 rounded-lg sm:w-[330px] transition-all ">
      <Link to={`/post/${post.slug}`}>
        <img
          className="h-[200px] w-full object-cover group-hover:h-[150px] transition-all duration-300 z-20"
          src={post.image}
          alt={post.title}
        />
      </Link>
      <div className=" p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          to={`/api/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-md !rounded-tl-none py-2 text-center m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
