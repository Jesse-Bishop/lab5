var data = require("../data.json");

exports.addFriend = function(req, res) {    
exports.view = function(req, res){
res.render('index', {
    'projects': [
          {
      "name": "Doug Engelbart",
      "description": "Has awesome pet mice",
      "imageURL": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Douglas_Engelbart_in_2008.jpg/972px-Douglas_Engelbart_in_2008.jpg"      
    }
    ]
  });
};



 }