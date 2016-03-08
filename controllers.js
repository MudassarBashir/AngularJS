// Controllers

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {

        $location.path("/forecast");

    };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    // I had to sign up for this free API key.
    $scope.apiKey = "8c6cbd6fb58035ffffaf257966bc6314";

    $scope.weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/forecast/daily?",
            { callback: "JSON_CALLBACK"},
            { get: { method: "JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, APPID: $scope.apiKey});

    $scope.convertToFahrenheit = function (kelvin) {

        return Math.round((1.8 * (kelvin - 273)) + 32);

    }

    $scope.convertToPrettyDate = function(uglyDate) {

        return new Date(uglyDate * 1000);

    }

}]);
