
var script = document.createElement('script');
script.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';
document.head.appendChild(script);


script.onload = function() {

  var typed = new Typed('.auto-input', {
    strings: ['Pedro Henrique', 'a Sea lover', 'a Engineer','tech entuzia','tech entosias', 'tech enthusiast'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
};
