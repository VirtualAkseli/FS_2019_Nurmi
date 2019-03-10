import React, { useState, useEffect } from "react";
import blogService from "../services/blogs";

const Blog = ({ blog }) => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState("");
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  const blogStyle = {
    backgroundColor: "yellow",
    paddingTop: 2,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 4,
    borderColor: "blue",
    marginBottom: 2
  };

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs));
  }, []);

  const addBlog = () => {
    console.log(blog.likes);
    blog.likes = blog.likes + 1;
    console.log(blog.likes);
    const blogObject = {
      id: blog.id,
      user: blog.user,
      likes: blog.likes,
      author: blog.author,
      title: blog.title,
      url: blog.url
    };

    blogService.update(blog.id, blogObject).then(returnedBlog => {
      setBlogs(blogs.concat(returnedBlog));
      setNewBlog("");
    });
  };

  const removeBlog = () => {
    blogService.remove(blog.id).then(blogs => {
      setBlogs(blogs);
      setNewBlog("");
    });
  };

  return (
    <div style={blogStyle}>
      <div style={showWhenVisible}>
        <h4 onClick={() => setVisible(false)}>{blog.title}</h4>

        {"Author: "}
        {blog.author}
        <p>
          {blog.likes}
          {" likes "}
          <button onClick={addBlog}>like</button>

          <p>
            <a href={blog.url}>{blog.url}</a>
          </p>
        </p>
        {"Added by: "}
        {blog.user.name}
        <p />

        <button
          onClick={() => {
            if (window.confirm("Do you really want to delete?")) {
              removeBlog();
              window.alert("Refresh to see changes");
            }
          }}
        >
          delete
        </button>
      </div>
      <div
        className="one"
        style={hideWhenVisible}
        onClick={() => setVisible(true)}
      >
        <h4>{blog.title}</h4>
      </div>
    </div>
  );
};

export default Blog;
