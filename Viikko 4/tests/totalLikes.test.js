const listHelper = require('../utils/list_helper')
describe('totalLikes', () => {
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
     _id: '2345678ijfgdsjasodkaod',
     title: 'This blog is not about me',
     author: 'Me, myself and I',
     url: 'http://wordpress.sb',
     likes: 6,
     __v: 0
     }
]


test('of empty list is zero', () => {
  const blogs = []

  const result = listHelper.totalLikes(blogs)
  
  
  expect(result).toBe(0)
})

test('when array has only on blog equals the likes of that', () => {
  

  const result = listHelper.totalLikes(blogs1)
  
  
  expect(result).toBe(6)
})

test('of a bigger list is calculated right', () => {
  

  const result = listHelper.totalLikes(blogs2)
  
  
  expect(result).toBe(12)
})


})
