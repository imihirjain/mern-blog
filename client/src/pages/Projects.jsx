import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500 dark:text-gray-400">
        At TechTonic, we believe in the power of hands-on learning. Our Projects
        section showcases a wide range of innovative tech projects that
        highlight the latest in web development, AI, cloud computing, data
        science, and beyond. Each project is designed to inspire, educate, and
        push the boundaries of what’s possible with technology.
      </p>
      <p className="text-md text-gray-500 dark:text-gray-400">
        Whether you’re a beginner looking for simple project ideas or an
        experienced developer aiming to explore advanced concepts, our Projects
        section has something for everyone. Each project includes detailed
        descriptions, code snippets, and practical tips to help you bring your
        ideas to life.
      </p>
      <h1 className="font-semibold text-xl ">
        Explore Our Project Categories:
      </h1>
      <ul className="list-disc flex flex-col gap-4 text-gray-500 dark:text-gray-400">
        <li>
          <strong className="text-gray-700 dark:text-gray-300">
            Web Development:
          </strong>{" "}
          Build dynamic, responsive websites using the latest frameworks and
          tools.
        </li>
        <li>
          <strong className="text-gray-700 dark:text-gray-300">
            Data Science:
          </strong>{" "}
          Discover projects that delve into machine learning, data
          visualization, and analytics.
        </li>
        <li>
          <strong className="text-gray-700 dark:text-gray-300">
            Cloud Computing:
          </strong>{" "}
          Learn about scalable applications and cloud deployment strategies.
        </li>
        <li>
          <strong className="text-gray-700 dark:text-gray-300">
            AI and Machine Learning:{" "}
          </strong>{" "}
          Get hands-on experience with models, algorithms, and AI-driven
          applications.
        </li>
        <li>
          <strong className="text-gray-700 dark:text-gray-300">
            Mobile Development:
          </strong>{" "}
          Create apps for iOS and Android that enhance user experience and
          functionality.
        </li>
      </ul>
      <p>
        Whether you want to share your work with the community or draw
        inspiration for your next project, TechTonic’s Projects page is the
        perfect place to start. Join our community to contribute your own
        projects, collaborate, and learn from others who are equally passionate
        about technology and innovation.
      </p>
      <CallToAction />
    </div>
  );
}
