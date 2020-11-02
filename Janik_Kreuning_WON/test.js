var app = angular.module('Calculator', [])
				.controller('CalculatorController', function($scope){
					$scope.result = function(){
						if($scope.op == "+"){
							return $scope.a + $scope.b;
						}
						if($scope.op == "-"){
							return $scope.a - $scope.b;

						}
						if($scope.op == "*"){
							return $scope.a * $scope.b;

						}
						if($scope.op == "/"){
							return $scope.a / $scope.b;

						}
					};

					var a = "";

					$scope.onclick = function(x){
						a = a + x;
					};

					$scope.showresult = function(){
						return a;
					};

					$scope.onoperator = function(x){
						a = a + " " + x + " ";
					};

					$scope.calculate = function(){
						a = eval(a);
					};

				});