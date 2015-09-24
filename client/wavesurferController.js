app.controller('WavesurferController', function($scope) {
	// createWavesurfer()
	// $scope.loadingMessage = true;

	wavesurfer.on('loading', function(progress, data) {
		$scope.loadingMessage = 'Loading... ' + progress + '%'
		$scope.$apply();
	})

	wavesurfer.on('ready', function() {
		console.log('it\'s ready!')
		$scope.loadingMessage = false;
		$scope.$apply();
		$scope.playPause = function() {
			wavesurfer.playPause();
		}

		// LOW PASS FILTER
		// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBiquadFilter
		// var lowpass = wavesurfer.backend.ac.createBiquadFilter();
		// wavesurfer.backend.setFilter(lowpass);
	});
});