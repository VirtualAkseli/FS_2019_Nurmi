import React from "react";

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5
  };

  /* const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  }; */

  return (
    <div>
      <div style={blogStyle}>
        <h4>{blog.title}</h4>
      </div>
    </div>
  );
};

export default Blog;
