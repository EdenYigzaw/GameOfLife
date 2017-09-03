app.controller('MainController', ['$scope', '$interval', function($scope, $interval) {
	$scope.rowNum = 20;
	$scope.colNum = 20;
	$scope.array = [];
	$scope.playing = false;
	$scope.neighbours = 0;

	for (i = 0; i < $scope.rowNum; i++) {
		$scope.array[i] = [];
		for (j = 0; j < $scope.colNum; j++) {
			$scope.array[i][j] = false;
		}
	}

	$scope.start = function() {
		if (!$scope.playing) {
			$scope.playing = true;
			$scope.interval = $interval(function() {
				$scope.oneGeneration();
			}, 500);
		}
	};

	$scope.switchAliveOrDead = function(x, y) {
		if (!$scope.playing) {
			$scope.array[y][x] = !$scope.array[y][x];
		}
	}

	$scope.oneGeneration = function() {
		$scope.newArray = JSON.parse(JSON.stringify($scope.array));
		$scope.array.forEach(function(y, y_index) {
			y.forEach(function(x, x_index) {
				for (row = -1; row <= 1; row++) {
					for (col = -1; col <= 1; col++) {
						if (!(row == 0 && col == 0) && $scope.array[(y_index+row+$scope.rowNum)%$scope.rowNum][(x_index+col+$scope.colNum)%$scope.colNum]) {
							$scope.neighbours++;
						}
					}
				}
				if ($scope.array[y_index][x_index]) {
					if ($scope.neighbours < 2) {
						$scope.newArray[y_index][x_index] = false;
					} else if ($scope.neighbours == 2 || $scope.neighbours == 3) {
						$scope.newArray[y_index][x_index] = true;
					} else {
						$scope.newArray[y_index][x_index] = false;
					}
				} else {
					if ($scope.neighbours == 3) {
						$scope.newArray[y_index][x_index] = true;
					}
				}
				$scope.neighbours = 0;
			});
		});
		$scope.array = $scope.newArray.slice();
	};

}]);