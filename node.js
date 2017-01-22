var mongoose=require('mongoose');

var movieSchema={
  name:{type:String, required:true},
  upvotes:{type:Number },
  reviews:{type:String},
};
