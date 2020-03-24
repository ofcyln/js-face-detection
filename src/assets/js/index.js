import '../css/reset.scss';
import '../css/styles.scss';

import * as faceapi from 'face-api.js';

class FaceEmotionDetector {
	constructor() {
		this.MILISECOND_VALUE = 100;

		this.video = document.querySelector('#video');

		this.getBoxSize();

		this.promiseFunctions();

		this.videoEventListener();
	}

	getBoxSize() {
		const positionInfo = this.video.getBoundingClientRect();
		const height = positionInfo.height;
		const width = positionInfo.width;

		this.boxSize = {width, height};

		return this.boxSize;
	}

	startCamera() {
		const constraints = {
			video: {
				facingMode: "user"
			},
			audio: false
		};

		navigator.mediaDevices
			.getUserMedia(constraints)
			.then(stream => (this.video.srcObject = stream))
			.catch(err => console.log('Error: ', err));
	}

	videoEventListener() {
		this.video.addEventListener('play', () => {
			const canvas = faceapi.createCanvasFromMedia(this.video);

			document.body.append(canvas);

			faceapi.matchDimensions(canvas, this.boxSize);

			setInterval(() => this.intervalCallback(canvas), this.MILISECOND_VALUE);
		});
	}

	async intervalCallback(canvas) {
		const detections = await faceapi
			.detectAllFaces(this.video, new faceapi.TinyFaceDetectorOptions())
			.withFaceLandmarks()
			.withFaceExpressions();

		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

		const resizeDetections = faceapi.resizeResults(detections, this.boxSize);

		faceapi.draw.drawDetections(canvas, resizeDetections);

		faceapi.draw.drawFaceLandmarks(canvas, resizeDetections);

		faceapi.draw.drawFaceExpressions(canvas, resizeDetections);
	};

	promiseFunctions() {
		Promise.all([
			faceapi.nets.tinyFaceDetector.loadFromUri('./src/assets/models'),
			faceapi.nets.faceLandmark68Net.loadFromUri('./src/assets/models'),
			faceapi.nets.faceRecognitionNet.loadFromUri('./src/assets/models'),
			faceapi.nets.faceExpressionNet.loadFromUri('./src/assets/models')
		]).then(values => this.startCamera());
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new FaceEmotionDetector();
});

