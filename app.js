var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    
    $scope.lowerCaseHandle = function () {
      return $filter('lowercase')($scope.handle);  
    };
    
    $scope.characters = 5;
    
    var rulesRequest = new XMLHttpRequest();
    
    rulesRequest.onreadystatechange = function () {
        
        $scope.$apply(function () {
            if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
                $scope.rules = JSON.parse(rulesRequest.responseText); 
            }
        });
    }
    
    rulesRequest.open("GET", "http://localhost:8080/rest/index",
                     true);
    rulesRequest.send();
    
    
}]);