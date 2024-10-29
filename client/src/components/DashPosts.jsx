import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
export default function DashPosts() {
  const { currUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (currUser.isAdmin) {
      fetchPosts();
    }
  }, [currUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserPosts((prev) =>
          prev.filter((post) => post._id !== postIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500 p-3 w-full min-h-screen">
      {currUser.isAdmin && userPosts.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <TableHead>
              <TableHeadCell>Date updated</TableHeadCell>
              <TableHeadCell>Post Image</TableHeadCell>
              <TableHeadCell>Post Title</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
              <TableHeadCell>
                <span>Edit</span>
              </TableHeadCell>
            </TableHead>
            {userPosts.map((post) => (
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:bg-gray-800 dark:border-gray-700">
                  <TableCell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500 "
                      />
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium text-gray-900 dark:text-white ">
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                  </TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                      className="font-medium text-red-500 cursor-pointer hover:underline"
                    >
                      Delete
                    </span>
                  </TableCell>
                  <TableCell>
                    <Link to={`/update-post/${post._id}`}>
                      <span className="text-teal-500 font-medium cursor-pointer hover:underline">
                        Edit
                      </span>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show More
            </button>
          )}
        </>
      ) : (
        <p>There is not any post</p>
      )}
      <Modal
        show={showModal}
        onClick={() => setShowModal(false)}
        popup
        size="md"
      >
        <ModalHeader>
          <ModalBody>
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            </div>
            <h3 className="text-gray-500 mb-5 text-lg dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => showModal(false)}>
                No, Cancel
              </Button>
            </div>
          </ModalBody>
        </ModalHeader>
      </Modal>
    </div>
  );
}
