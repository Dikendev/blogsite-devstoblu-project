var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions to match the video
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

// Start playing the video
video.play();

// Use requestAnimationFrame to redraw the canvas at 60 frames per second
function drawFrame() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(drawFrame);
}
requestAnimationFrame(drawFrame);
