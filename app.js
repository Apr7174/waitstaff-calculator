angular.module('myApp', [])
  //  .filter('percentage', ['$filter', function($filter) {
		// return function (input, decimals) {
		// 	return $filter('number')(input * 100, decimals) + "%";
		// };
	.run(function() {
		console.log("does it run");
	})	

	.controller('MyController', function($scope){
		$scope.enterMeal = function(){
			$scope.subtotal = $scope.mealBase + ($scope.mealBase * $scope.taxRate / 100);
			$scope.tip = ($scope.subtotal * $scope.tipPercentage / 100);
			$scope.total = $scope.subtotal + $scope.tip;

			$scope.tipTotal += $scope.tip;
			$scope.mealCount ++;
			$scope.averageTip = $scope.tipTotal / $scope.mealCount;			
		}

		$scope.resetMeal = function(){
			$scope.mealBase = 0;
			$scope.taxRate = 0;
			$scope.tipPercentage = 0;
		}

		$scope.resetEarnings = function(){
			$scope.tipTotal = 0;
			$scope.mealCount = 0;	
			$scope.averageTip = 0;
		}

		//initalizes values
		$scope.resetEarnings();
		$scope.resetMeal();
	});
