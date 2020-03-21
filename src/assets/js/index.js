import '../css/reset.scss';
import '../css/styles.scss';

import * as faceapi from 'face-api.js';

class Execute {
	constructor() {
		this.MILISECOND_VALUE = 100;

		this.video = document.querySelector('#video');

		this.promiseFunctions();

		this.videoEventListener();
	}

	startCamera() {
		navigator.getUserMedia({
			video: {}
		},
	stream => (this.video.srcObject = stream),
	err => console.log('Error: ', err));
	}

	videoEventListener() {
		this.video.addEventListener('play', () => {
			const canvas = faceapi.createCanvasFromMedia(this.video);

			document.body.append(canvas);

			const boxSize = {
				width: this.video.width, height: this.video.height
			};

			faceapi.matchDimensions(canvas, boxSize);

			const intervalCallback = async() => {
				const detections = await faceapi
					.detectAllFaces(this.video, new faceapi.TinyFaceDetectorOptions())
					.withFaceLandmarks()
					.withFaceExpressions();

				canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

				const resizeDetections = faceapi.resizeResults(detections, boxSize);

				faceapi.draw.drawDetections(canvas, resizeDetections);

				faceapi.draw.drawFaceLandmarks(canvas, resizeDetections);

				faceapi.draw.drawFaceExpressions(canvas, resizeDetections);
			};

			setInterval(intervalCallback, this.MILISECOND_VALUE);
		});
	}

	promiseFunctions() {
		return Promise.all([
			faceapi.nets.tinyFaceDetector.loadFromUri('./src/assets/models'),
			faceapi.nets.faceLandmark68Net.loadFromUri('./src/assets/models'),
			faceapi.nets.faceRecognitionNet.loadFromUri('./src/assets/models'),
			faceapi.nets.faceExpressionNet.loadFromUri('./src/assets/models')
		]).then(this.startCamera());
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new Execute();
});

