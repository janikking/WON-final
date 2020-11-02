var sampleApp = angular.module("formApp",[]);

    sampleApp.controller("FormController",function($scope) {

        $scope.master = [{"voornaam" : "Janik",
    					  "achternaam" : "Kreuning",
    					  "age" : "20",
    					  "postcode" : "7325PC"}]
        $scope.tempuser;


        $scope.Display = function () {
        	$scope.tempuser = angular.copy($scope.user)
        	$scope.master.push($scope.tempuser);
        }

    });