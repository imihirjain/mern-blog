import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about JavaScript</h2>
        <p className="text-gray-500 my-2">
          Check out these resources with 100 JavaScript Projects
        </p>
        <Button
          gradientDuoTone="redToYellow"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.youtube.com/watch?v=13gLB6hDHR8&t=36508s&pp=ygUtamF2YXNjcmlwdCBmdWxsIGNvdXJzZSB0aGFwYSB0ZWNobmljYWwgcGFydCAx"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript Course
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s"
        />
      </div>
    </div>
  );
}
