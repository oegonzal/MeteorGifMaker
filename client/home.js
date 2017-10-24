Template.gifmaker.events({
    'change input': Meteor.saveFile
});


function saveFile(blob, name, path, type, callback) {
	var fileReader = new FileReader(),
		method, encoding = 'binary', type = type || 'binary';
	switch (type) {
		case 'image/png':
		case 'image/jpeg':
		case 'binary':
			method = 'readAsBinaryString';
			encoding = 'binary';
			break;
		default:
			method = 'readAsBinaryString';
			encoding = 'binary';
			break;
	}
	fileReader.onload = function (file) {
		console.log(file);
		// TODO save file to db or locally
		images.push(file.target);
		debugger;
	}
	fileReader[method](blob);
}

function makeGif(images) {
	gifshot.createGIF({
		gifWidth: 200,
		gifHeight: 200,
		images: Images,
		interval: 0.1,
		numFrames: 10,
		frameDuration: 1,
		fontWeight: 'normal',
		fontSize: '16px',
		fontFamily: 'sans-serif',
		fontColor: '#ffffff',
		textAlign: 'center',
		textBaseline: 'bottom',
		sampleInterval: 10,
		numWorkers: 2
	}, function (obj) {
		if (!obj.error) {
			var image = obj.image, animatedImage = document.createElement('img');
			animatedImage.src = image;
			document.body.appendChild(animatedImage);
		}
	});
	debugger;
}