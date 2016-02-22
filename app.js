var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    
    $scope.handle = '';
    
    $scope.lowerCaseHandle = function () {
      return $filter('lowercase')($scope.handle);  
    };
    
    $scope.characters = 5;
    
    $http.get('http://localhost:8080/rest/index')
        .success(function(result) {
           $scope.rules = result; 
        })
        .error(function(data, status) {
            console.log(data);
        });
    
    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('http://localhost:8080/rest/index', {newRule: $scope.newRule})
            .success(function(result) {
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function(data) {
                console.log(data);
            });
    };
}]);