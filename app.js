// Declaring an angular module. 
/* We tell angular where in the 'view'(the web page) this app lives by using the ng-app attribute. See the corresponding
html file line 2.
*/

var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// Declaring an angular controller.
/* The $scope variable is an angular service. Angular service names start with a '$'. By inserting it as an argument to
the controller functions. We are using angular's dependency injection mechanism to declare that we want this controller 
to user the $scope service. $scope then defines the data that will go between this function and the part of the view that is
controlled by this controller. */

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $log.info($scope);
}]);








/*___________________________________________________________
var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));

/*
// Javascript dependency injection example
var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function logPerson(person) {
    console.log(person);
}

var john = new Person('John', 'Doe');
logPerson(john);
*/