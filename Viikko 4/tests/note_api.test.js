const mongoose = require("mongoose");
const supertest = require("supertest");
const helper = require("./test_helper");
const app = require("../app");

const api = supertest(app);
const Blog = require("../models/blog");
const User = require("../models/user");
/*
describe('when there is initially one user at db', async () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const user = new User({ username: 'root', password: 'sekret' })
    await user.save()
  })
  
  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
    
  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length)
  })
  
  
})
*/

beforeEach(async () => {
  await Blog.remove({});

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog);
    await blogObject.save();
  }
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all blogsposts are returned", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body.length).toBe(helper.initialBlogs.length);
});

test("the first note is about HTML", async () => {
  const response = await api.get("/api/blogs");

  const contents = response.body.map(r => r.title);

  expect(contents).toContain("HTML on helppoa");
});

test("a valid blogpost can be added (if likes not given, set to 0)", async () => {
  const newBlog = {
    title: "async/await yksinkertaistaa asynkronisten funktioiden kutsua",
    author: "Matti Luukkainen",
    url: "undefined",
    likes: 300
  };

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1);

  const contents = blogsAtEnd.map(n => n.title);
  const contents2 = blogsAtEnd.map(m => m.likes);

  expect(contents).toContain(
    "async/await yksinkertaistaa asynkronisten funktioiden kutsua"
  );
});

test("a specific blogpost can be viewed", async () => {
  const blogsAtStart = await helper.blogsInDb();

  const blogToView = blogsAtStart[0];

  const resultBlog = await api
    .get(`/api/blogs/${blogToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(resultBlog.body.toJSON).toEqual(blogToView.toJSON);
});

test("a blogpost can be deleted", async () => {
  const blogsAtStart = await helper.blogsInDb();

  const blogToDelete = blogsAtStart[0];

  await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

  const blogsAtEnd = await helper.blogsInDb();

  expect(blogsAtEnd.length).toBe(blogsAtStart.length - 1);

  const contents = blogsAtEnd.map(r => r.title);

  expect(contents).not.toContain(blogToDelete.title);
});

test("a blogpost can be updated with new likes", async () => {
  var sets = helper.blogsInDb();
  const idArray = sets.filter(part => {
    part.title ===
      "async/await yksinkertaistaa asynkronisten funktioiden kutsua";
  });
  console.log("tammosta");
  console.log(idArray);
  const newBlog = {
    title: "async/await yksinkertaistaa asynkronisten funktioiden kutsua",
    author: "Matti Luukkainen",
    url: "undefined",
    likes: 9001
  };

  await api.put(`/api/blogs/${idArray.id}`);

  const response = await api.get(`/api/blogs/${idArray.id}`);

  expect(response.likes).toBe(9001);
});

describe("when there is initially one user at db", async () => {
  beforeEach(async () => {
    await User.deleteMany({});
    const user = new User({ username: "root", password: "sekret" });
    await user.save();
  });

  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "salainen"
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1);

    const usernames = usersAtEnd.map(u => u.username);
    expect(usernames).toContain(newUser.username);
  });

  test("creation fails with proper statuscode and message if username already taken", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "root",
      name: "Superuser",
      password: "salainen"
    };

    const result = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    expect(result.body.error).toContain("`username` to be unique");

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd.length).toBe(usersAtStart.length);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
