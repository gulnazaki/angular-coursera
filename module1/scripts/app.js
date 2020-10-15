(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.lunch = "";

	$scope.checkQuantity = function () {
		if ($scope.lunch === "") {
			$scope.message = "Please enter data first";
		} else {
			var items = $scope.lunch.split(',').length;
			if (items <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!"
			}
		}
	};
}

})();