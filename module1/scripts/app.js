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
			$scope.color = "red";
		} else {
			var items = $scope.lunch.split(',').filter(lunch => lunch.trim() !== "").length;
			$scope.color = "green";
			if (items <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!"
			}
		}
	};
}

})();