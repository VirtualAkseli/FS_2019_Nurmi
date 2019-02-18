const listHelper = require('../utils/list_helper')

describe('favoriteBlog', () => {
    
    const blogs1 = [{
     _id: '2345678ijfgdsjasodkaod',
     title: 'This blog is not about me',
     author: 'Me, myself and I',
     url: 'http://wordpress.sb',
     likes: 6,
     __v: 0
}]

const blogs2 = [{
      _id: '2345678ijfgdsjasodkaod',
     title: 'This blog is not about me',
     author: 'Me, myself and I',
     url: 'http://wordpress.sb',
     likes: 6,
     __v: 0
      },
     {
     _id: '2345678ij23423563aod',
     title: 'This blog is not about me',
     author: 'Me, myself and I',
     url: 'http://wordpress.sb',
     likes: 6,
     __v: 0
     },
     {
    _id: '23456789iuytrdfg7',
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  url: 'http://rt.com',
  likes: 12,
  __v: 0
}
]


test('of empty list is zero', () => {
  const blogs = []

  const result = listHelper.favoriteBlog(blogs)
  
  
  expect(result).toBe(0)
})



test('of a bigger list is calculated right', () => {
  

  const result = listHelper.favoriteBlog(blogs2)
  
  
  expect(result).toBe(12)
})


})

