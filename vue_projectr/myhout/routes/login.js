var express = require('express');
var router = express.Router();
var Users = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

});




router.post('/',function(req,res){
  Users.find({
    user:req.body.user,
    pw:req.body.pw
  },function(error,result){
      if(!error){
      	if(result.length>0){
           req.session.lans=result[0];
      		 res.send({name:req.body.user,success:true})
      	}else{
      		res.send({success:false})
      	}
      
      }
  })
});


router.post('/reg',function(req,res){
  Users.create({
    user:req.body.user,
    em:req.body.em,
    pw:req.body.pw
  },function(error,result){
      if(!error){
      		 res.send({success:true})
      }
  })
});
module.exports = router;
