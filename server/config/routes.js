  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  	// First, at the top of your routes.js file you'll have to require the controller
    var topics = require('./../controllers/topics.js');

    // Topics
    app.get('/topic/:topicIndex', function(req, res) {
      topics.detailInfo(req, res);
    });

    app.post('/topic/:topicIndex', function(req, res) {
      topics.addPost(req, res);
    });

    app.post('/post/:id', function(req, res) {
      topics.addComment(req, res);
    });

    app.get('/topics', function(req, res) {     
      topics.index(req, res);
    }); 

    app.post('/topics', function(req, res) { 
      console.log('app.post', req.body.category, req.body.topic, req.body.userName, req.body.description);    
      topics.create(req, res);
    }); 

    // First, at the top of your routes.js file you'll have to require the controller
    var users = require('./../controllers/users.js');

    app.post('/users', function(req, res) {
      users.create(req, res);
      res.send('ok');
    });     

    app.get('/user/:userName', function(req, res) {
      users.get(req, res);
    });    

      
};