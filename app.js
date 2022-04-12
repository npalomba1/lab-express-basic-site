const express = require('express');

//we create our own server named app
//Express server will e handling requests and response
const app = express(); 

// our first route 
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
}); 



//about route
app.get('/about', (request, response) => 
    response.sendFile(__dirname + '/views/about-page.html'));

//works route
app.get('/works', (request, response) =>
    response.sendFile(__dirname + '/views/works-page.html'));


//server started
app.listen(3000, () => console.log('N Syde of my Palace 3000'));//don't forget to link to the other pages here