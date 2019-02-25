import React from "react";

const SimpleBlog = ({ blog, onClick }) => (
  <div className="tester">
    <div>
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button onClick={onClick} className="like">
        like
      </button>
    </div>
  </div>
);

export default SimpleBlog;
