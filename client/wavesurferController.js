app.controller('WavesurferController', function($scope) {
	// createWavesurfer()
	$scope.loadingMessage = 'Loading... 0%';
	$scope.duration;
	$scope.currentTime;

	wavesurfer.on('loading', function(progress, data) {
		$scope.loadingMessage = 'Loading... ' + progress + '%'
		$scope.$apply();
	})

	wavesurfer.on('ready', function() {
		console.log('it\'s ready!')
		$scope.loadingMessage = false;
		$scope.totalSeconds = ~~(wavesurfer.getDuration())
		$scope.duration = convertSecondsToStandardFormat($scope.totalSeconds);
		$scope.$apply();
		$scope.playPause = function() {
			wavesurfer.playPause();
		}

		// LOW PASS FILTER
		// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBiquadFilter
		// var lowpass = wavesurfer.backend.ac.createBiquadFilter();
		// wavesurfer.backend.setFilter(lowpass);
	});

	wavesurfer.on('seek', function(timeRatio) {
		var seekedTime = Math.floor(timeRatio * $scope.totalSeconds);
		$scope.currentTime = convertSecondsToStandardFormat(seekedTime);
		$scope.$apply();
	})

	wavesurfer.on('audioprocess', function(data) {
		var currentTime = ~~(wavesurfer.getCurrentTime())
		$scope.currentTime = convertSecondsToStandardFormat(currentTime);
		$scope.$apply();
	})
});

function convertSecondsToStandardFormat(seconds) {
	var minutes = ~~(seconds / 60);
	var seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return minutes + ':' + seconds;
}