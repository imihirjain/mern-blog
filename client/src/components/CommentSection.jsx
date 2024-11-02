import { Alert, Button, Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Comment from "./Comment";
export default function CommentSection({ postId }) {
  const { currUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentsError, setCommentsError] = useState(null);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  console.log(currUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currUser) return;
    if (comment.length > 200) return;
    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentsError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentsError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        const data = await res.json();
        if (res.ok) {
          setComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currUser) {
        navigate("/signin");
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (comment, editedComment) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedComment } : c
      )
    );
  };
  return (
    <div className="max-w-2xl p-3 mx-auto w-full">
      {currUser ? (
        <div className="flex items-center gap-1 my-5 text-sm text-gray-500">
          <p>Signed in as:</p>
          <img
            className="w-5 h-5 object-cover rounded-full"
            src={currUser.profilePicture}
            alt=""
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="text-xs text-cyan-600 hover:underline"
          >
            @{currUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1 ">
          You must be signed in to comment.
          <Link to={"/signin"} className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </div>
      )}
      {currUser && (
        <form
          onSubmit={handleSubmit}
          className="border border-teal-500 p-3 rounded-md"
        >
          <Textarea
            placeholder="Add a comment..."
            rows="3"
            maxLength="200"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex mt-5 justify-between items-center">
            <p className="text-gray-500 text-xs">
              {200 - comment.length} characters remaining
            </p>
            <Button type="submit" outline gradientDuoTone="redToYellow">
              Submit
            </Button>
          </div>
          {commentsError && (
            <Alert color="failure" className="mt-5">
              {commentsError}
            </Alert>
          )}
        </form>
      )}
      {comments.length === 0 ? (
        <div>
          <p className="text-sm my-5">No comments yet!</p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-1 my-5 text-sm">
            <p>Comments:</p>
            <div className="border py-1 px-2 rounded-sm border-gray-400">
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              onLike={handleLike}
              onEdit={handleEdit}
            />
          ))}
        </>
      )}
    </div>
  );
}
