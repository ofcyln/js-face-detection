import '../css/reset.scss';
import '../css/styles.scss';

import faceapi from 'face-api';

document.addEventListener('DOMContentLoaded', () => {
	const video = document.querySelector('#video');

	const startCamera = () => {
		navigator.getUserMedia({
			video: {}
		}, stream => (video.srcObject = stream), err => console.log(err));
	};

	Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
		faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
		faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
		faceapi.nets.faceExpressionNet.loadFromUri('/models')
	]).then(startCamera());

	video.addEventListener('play', () => {
		const canvas = faceapi.createCanvasFromMedia(video);

		document.body.append(canvas);

		const boxSize = {
			width: video.width, height: video.height
		};

		faceapi.matchDimensions(canvas, boxSize);

		setInterval(async () => {
			const detections = await faceapi
				.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
				.withFaceLandmarks()
				.withFaceExpressions();

			canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

			const resizeDetections = faceapi.resizeResults(detections, boxSize);

			faceapi.draw.drawDetections(canvas, resizeDetections);

			faceapi.draw.drawFaceLandmarks(canvas, resizeDetections);

			faceapi.draw.drawFaceExpressions(canvas, resizeDetections);

			console.log(detections);
		}, 100);
	});
});

