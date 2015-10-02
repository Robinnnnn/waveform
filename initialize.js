var trackUrls = ['/audio/Lullabies (Adventure Club Remix).mp3', 'https://dl.dropbox.com/s/bxfdcacy6w9bjug/phazz.mp3']
var waveforms = [];

for (var t in trackUrls) {
	createWavesurfer(trackUrls[t], t);
}

function createWavesurfer(link, index) {
	waveforms.push(Object.create(WaveSurfer));

	waveforms[index].init({
		container: document.querySelector('#track' + index),
		waveColor: 'transparent',
		progressColor: '#73caff',
		barWidth: 3,
		cursorWidth: 0,
		hoverColor: '#c0e7ff',
		height: 150,
		// reflection: true
	});

	waveforms[index++].load(link);
};

// function createWavesurfer(link) {
// 	wavesurfer = Object.create(WaveSurfer);

// 	wavesurfer.init({
// 		container: document.querySelector('#track' + n_track++),
// 		waveColor: 'transparent',
// 		progressColor: '#73caff',
// 		barWidth: 3,
// 		cursorWidth: 0,
// 		hoverColor: '#c0e7ff',
// 		height: 150,
// 		// reflection: true
// 	});

// 	// wavesurfer.load('https://dl.dropbox.com/s/bxfdcacy6w9bjug/phazz.mp3');
// 	wavesurfer.load(link);
// };

// Sweet progress/hover/b.strokeStyle combos:
// #80b9ff, #cce3ff, #66bdff
// #73caff, #c0e7ff, #93d0ff