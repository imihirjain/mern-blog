// eslint-disable-next-line no-unused-vars
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen items-center justify-center flex ">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold my-7 text-center">
            About TechTonic Blog
          </h1>
          <div className="flex flex-col gap-6 text-black text-md">
            <p>
              Welcome to TechTonic – your go-to platform for everything tech!
              Built with the robust MERN stack, TechTonic is designed to empower
              tech enthusiasts, developers, and anyone curious about the latest
              trends, innovations, and insights in the world of technology.
            </p>
            <p>
              Our mission at TechTonic is to provide a dynamic space where both
              seasoned professionals and new learners can share, explore, and
              discuss the most exciting developments in the tech world. Whether
              you're looking to deepen your understanding of the latest
              programming languages, keep up with industry trends, or find tips
              and tricks to improve your skills, TechTonic is here for you.
            </p>
            <p>
              With features tailored for an engaging blogging experience,
              TechTonic allows users to write and publish their own technical
              articles, engage with others through comments, and stay updated
              with the latest posts. We're committed to building a collaborative
              community that encourages knowledge sharing and continuous
              learning.
            </p>
            <p>
              Join TechTonic today and be part of a growing community that fuels
              the passion for technology and innovation!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
