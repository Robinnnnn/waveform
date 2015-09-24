var wavesurfer;

(function createWavesurfer() {
	wavesurfer = Object.create(WaveSurfer);

	wavesurfer.init({
		container: document.querySelector('#wave'),
		waveColor: '#ffffff',
		progressColor: '#0092ff',
		barWidth: 3,
		cursorWidth: 0
	});

	wavesurfer.load('https://dl.dropbox.com/s/bxfdcacy6w9bjug/phazz.mp3');
})();