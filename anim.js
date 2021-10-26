

// var cleanUpArray = function () {
//     particles = particles.filter((p) => { 
//       return (p.x > -100 && p.y > -100); 
//     });
// };


// var initParticles = function (numParticles, x, y) {
//     for (let i = 0; i < numParticles; i++) {
//         particles.push(new Particle(x, y));
//     }
//     particles.forEach((p) => {
//         drawParticle(p.x, p.y, p.r, p.c);
//     });
// };

// window.requestAnimFrame = (function() {
//   return window.requestAnimationFrame ||
//      window.webkitRequestAnimationFrame ||
//      window.mozRequestAnimationFrame ||
//      function(callback) {
//         window.setTimeout(callback, 1000 / 60);
//      };
// })();



// var frame = function () {
//   drawBg(ctx, colorPalette.bg);
//   particles.map((p) => {
//     return updateParticleModel(p);
//   });
//   particles.forEach((p) => {
//       drawParticle(p.x, p.y, p.r, p.c);
//   });
//   window.requestAnimFrame(frame);
// };

// document.body.addEventListener("click", function (event) {
//     var x = event.clientX,
//         y = event.clientY;
//     cleanUpArray();
//     initParticles(config.particleNumber, x, y);
// });


// frame();

// initParticles(config.particleNumber);