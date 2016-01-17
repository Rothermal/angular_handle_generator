console.log('grunt is working');
var app = angular.module('myApp',[]);


app.controller('MainController',['$scope','$http',function($scope,$http){


    $http.get('/nouns').then(function(response){
       console.log('nouns response in controller',response);
    $scope.nouns = response.data;
    });

    $http.get('/adjectives').then(function(response){
       console.log(' adjectives response in controller',response);
    $scope.adjectives = response.data;
    });

    $scope.twitterHandle = function() {
        $scope.handles = [];

        for (var i = 0; i < $scope.nouns.length; i++) {
            $scope.handles[i] = $scope.adjectives[randomNumber(0,$scope.nouns.length -1 )].adjective +  $scope.nouns[randomNumber(0,$scope.nouns.length - 1)].noun;
        }
        console.log($scope.handles);
    };

}]);

function randomNumber(min, max){
    return Math.floor(Math.random() * ((1 + max) - min) + min);
}