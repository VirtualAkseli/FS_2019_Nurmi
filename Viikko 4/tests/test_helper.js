const Blog = require("../models/blog");
const User = require("../models/user");
const initialBlogs = [
  {
    author: "Juhq Kankkunen",
    title: "HTML on helppoa",
    url: "not-defined",
    likes: 5,
    
  },
  {
    author: "Heikki Hoopo",
    title: "Kanooteilla kuljen; pellenkenkien arkikäytön perusteet",
    url: "undefined",
    likes: 2000000,

  }
];

const nonExistingId = async () => {
  const blog = new Blog({ content: "willremovethissoon" });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blg => blg.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
};


module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb,
};
