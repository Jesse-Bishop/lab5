// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
res.render('index', {
    'projects': [
          {
      "name": "Doug Engelbart",
      "description": "Has awesome pet mice",
      "imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"      
    },
    {
      "name": "Ivan Sutherland",
      "description": "Great at sketching",
      "imageURL": "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"     
    },
    {
      "name": "Lucy Suchman",
      "description": "Loves Trukese navigators",
      "imageURL": "http://upload.wikimedia.org/wikipedia/commons/d/df/Lucy_Suchman.jpeg"      
    },
    {
      "name": "Vannevar Bush",
      "description": "Has stellar associative memory",
      "imageURL": "http://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg"     
    },
    {
      "name": "Grace Hopper",
      "description": "Only friend with a Navy ship named after them",
      "imageURL": "http://www.wic.org/pic/ghopper.gif"
    },
    {
      "name": "Allen Newell",
      "description": "Really into psychology",
      "imageURL": "http://diva.library.cmu.edu/webapp/newell/index.gif"
    }
    ]
  });
};