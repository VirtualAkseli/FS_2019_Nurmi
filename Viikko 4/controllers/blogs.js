const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
  response.json(blogs.map(blg => blg.toJSON()));
});

blogsRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      if (blog) {
        response.json(blog.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  //const user = await User.findById(body.userId);

  const blogp = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
    //user: user._id
  });

  try {
    const savedBlog = await blogp.save();
    //user.blogs = user.blogs.concat(savedBlog._id);
    //await user.save();
    response.json(savedBlog.toJSON());
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  try {
    const found = await Blog.findByIdAndRemove(request.params.id);

    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

blogsRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const blogP = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  };

  Blog.findByIdAndUpdate(request.params.id, blogP, { new: true })
    .then(updatedblogP => {
      response.json(updatedblogP.toJSON());
    })
    .catch(error => next(error));
});

module.exports = blogsRouter;
