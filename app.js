var myApp= angular.module('myApp', ['ngRoute']);
myApp.controller('myController', ['$scope', '$filter', function($scope, filter) {

    $scope.integer="0";
	$scope.decimal="0";
    $scope.binary="0";
    $scope.octal="0";
    $scope.hexa="0";

    $scope.$watch('integer', function(newValue, oldValue) {
        $scope.binary=parseInt(newValue, 10).toString(2);
        $scope.octal=parseInt(newValue, 10).toString(8);
		$scope.decimal=parseInt(newValue, 10).toString(10);
        $scope.hexa=parseInt(newValue, 10).toString(16);


    });

}]);