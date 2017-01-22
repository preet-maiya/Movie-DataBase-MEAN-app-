var app=angular.module('Movie Reviews',[]);
function movies(title)
{
  this.title=title;
  this.upvotes=0;
  this.reviews=[];
};
app.controller('mainController',function($scope){
  $scope.heading="Movie Reviews";
  $scope.movies=[];
  $scope.addMovies = function(){
    if($scope.title.lenfth==0)
      return ;
    $scope.movies.push({title: $scope.title, upvotes:0, reviews:[]});
    $scope.title='';
  };
  $scope.upvote = function(movie)
  {
    movie.upvotes+=1;
  };
  $scope.addReview = function(movie){
    movie.reviews.push('Hardcoded review');
    $scope.review='';
  };
});
app.controller('reviewController',function($scope){
  $scope.reviews=[];
});
