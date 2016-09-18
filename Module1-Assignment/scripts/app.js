
(function(){

'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

	$scope.dishes = '';
	$scope.message = '';

	$scope.checkIfTooMuch = function (dishes) {

		if($scope.dishes === '' || $scope.dishes === " ") {

			$scope.message = "Please Enter Data First";
			$scope.styleOne = false;
			$scope.styleTwo = true;
			
		} else {

			var dishes = dishes.split(',');
			
			if(dishes.length <=3 ) {

				$scope.message = "Enjoy!!";
				$scope.styleTwo = false;
				$scope.styleOne = true;
				
			} else {

				$scope.message = "Too Much!";
				$scope.styleTwo = false;
				$scope.styleOne = true;
				
			}


		}

	};


};


})();