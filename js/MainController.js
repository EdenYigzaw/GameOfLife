app.controller('MainController', ['$scope', '$interval', function($scope, $interval) {
	rowNum = 20;
	colNum = 20;
	$scope.array = [];
	for (i = 0; i < rowNum; i++) {
		$scope.array[i] = [];
		for (j = 0; j < rowNum; j++) {
			$scope.array[i][j] = false;
		}
	}

	$scope.playing = false;

	$scope.start = function() {
		$scope.playing = true;
		$interval(function() {
			$scope.oneGeneration();
		}, 500);
	};

	$scope.switch = function(x, y) {
		if (!$scope.playing) {
			$scope.array[y][x] = !$scope.array[y][x];
		}
	}

	$scope.oneGeneration = function() {
	};

}]);