app.controller('WavesurferController', function($scope) {
	// createWavesurfer()
	$scope.loadingMessage = 'Loading... 0%';
	$scope.duration;
	$scope.currentTime;

	// var currentWaveform = waveforms[0]

	for (var w in waveforms) {
		waveforms[w].on('loading', function(progress, data) {
			createLoader(progress, data);
			$scope.$apply();
		})

		waveforms[w].on('ready', function() {
			console.log('it\'s ready!')
			$scope.loadingMessage = false;
			$scope.totalSeconds = ~~(waveforms[w].getDuration())
			$scope.duration = convertSecondsToStandardFormat($scope.totalSeconds);
			$scope.$apply();
			$scope.playPause = function() {
				waveforms[w].playPause();
			}

			// LOW PASS FILTER
			// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBiquadFilter
			// var lowpass = waveforms[w].backend.ac.createBiquadFilter();
			// waveforms[w].backend.setFilter(lowpass);
		});

		waveforms[w].on('seek', function(timeRatio) {
			seekTo(timeRatio);
			$scope.$apply();
		})

		waveforms[w].on('audioprocess', function(data) {
			updateTimestamp();
			$scope.$apply();
		})
	}

	function createLoader(progress, data) {
		$scope.loadingMessage = 'Loading... ' + progress + '%'
	}

	function seekTo(timeRatio) {
		var seekedTime = Math.floor(timeRatio * $scope.totalSeconds);
		$scope.currentTime = convertSecondsToStandardFormat(seekedTime);
	}

	function updateTimestamp() {
		var currentTime = ~~(waveforms[w].getCurrentTime())
		$scope.currentTime = convertSecondsToStandardFormat(currentTime);
	}

	function convertSecondsToStandardFormat(seconds) {
		var minutes = ~~(seconds / 60);
		var seconds = seconds % 60;
		if (seconds < 10) seconds = "0" + seconds;
		return minutes + ':' + seconds;
	}
});