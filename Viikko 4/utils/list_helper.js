const dummy = (blogs) => {

    return 1;
}

const totalLikes = (blogs) => {
    
    if (blogs.length === 0) {
    return 0;
        
    }
    
   function sum(total, num) {
   
       return total + num
       
}
       blogs3 = blogs.map( part => part.likes);
       
      return blogs3.reduce(sum);
       
}

const favoriteBlog = (blogs) => {
    
    if (blogs.length === 0) {
    return 0;
        
    }
    
   
       blogs3 = blogs.map( part => part.likes);
       biggest = Math.max(...blogs3);
       
       const sout = blogs.filter(function(part) {
          return part.likes === biggest;
       }
    )
       console.log(sout[0])
      return biggest;
       
}





module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
 
}