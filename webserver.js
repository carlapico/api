//creating a web server 

// installing a library // http is a built in library 
// in the command line in order to install we : ➜  api git:(main) ✗ npm intall http 

const express = require ("express") // require is the ES5 way
// in the command line in order to install express // npm i express  
const app = express () // connecting the server // we are going to create a new variable named app 
const port = 3001 // colon (:) = port // 

app.listen (port, () => {
    console.log(`started on port ${port}`) //template literal is backticks// they are necessary here 
})
// we just created a webserver 
// localhost:3001
// this computer / colon = port / 3001 is the name of the port 


