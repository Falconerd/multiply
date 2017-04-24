export const colors = [ '#3FB8AF', '#7FC7AF', '#DAD8A7', '#FF9E9D', '#FF3D7F' ];
export const RENDER_WIDTH = 320;
export const RENDER_HEIGHT = 180;
export const SCALE = calculateContextScale(RENDER_WIDTH, RENDER_HEIGHT);
export const canvas = document.createElement('canvas');
export const context = canvas.getContext('2d');
// Append the canvas to the body
document.body.style.margin = 0;
document.body.style.backgroundColor = '#111111';
document.body.appendChild(canvas);

// Set the canvas width and height based on calculated scale and render size
canvas.width = RENDER_WIDTH * SCALE;
canvas.height = RENDER_HEIGHT * SCALE;
canvas.style.imageRendering = 'pixelated';

// Set the scale of the context
context.scale(SCALE, SCALE);

// Let's calculate the closest full integer scale we can come up
// with based on the width and height of the window...
function calculateContextScale(renderWidth, renderHeight) {
  const { innerWidth, innerHeight } = window;
  return Math.min(Math.floor(innerWidth / renderWidth),
                  Math.floor(innerHeight / renderHeight));
}

context.beginPath();
context.moveTo(64, 64);
context.lineTo(32, 32);
context.stroke();

context.beginPath();
context.fillStyle = colors[0];
context.shadowColor = colors[1];
context.shadowBlur = 20;
context.arc(128, 128, 4, 0, Math.PI * 2);
context.closePath();
context.fill();

context.beginPath();
context.fillStyle = colors[4];
context.shadowColor = colors[3];
context.shadowBlur = 20;
context.rect(150, 90, 4, 4);
context.closePath();
context.fill();
