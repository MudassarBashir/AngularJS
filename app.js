var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

myApp.service('nameService', function() {

    var self = this;
    this.name = 'John Doe';

    this.namelength = function() {
      return self.name.length;
    };

});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

    $scope.people = [
        {
            name: "John Doe",
            address: '555 Main. St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: "Jane Doe",
            address: '333 Second St.',
            city: 'Las Vegas',
            state: 'NV',
            zip: '77777'
        },
        {
            name: "George Doe",
            address: '6782 Cuba St.',
            city: 'Miami',
            state: 'FL',
            zip: '88888'
        }
    ]

    $scope.formattedAddress = function(person) {

        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;

    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {


}]);

myApp.directive("searchResult", function () {

    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        link: function (scope, elements, attrs) {

            console.log('Post-linking...');
            console.log(scope.personObject.name);

            if (scope.personObject.name == 'Jane Doe') {

                elements.removeAttr('class');
            }

            console.log(elements);

        }
    }
});
