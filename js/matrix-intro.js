/**
 * Three.js Matrix-Style Hero Intro
 * Creates a particle-based Matrix rain effect with 3D camera movement
 * Falls back to video if WebGL is not available
 */
(function() {
  'use strict';

  // Check for WebGL support
  var canvas = document.createElement('canvas');
  var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    console.log('WebGL not available, falling back to video');
    return;
  }

  // Remove the static video, replace with Three.js canvas
  var heroVideoWrap = document.querySelector('.hero-video-wrap');
  if (heroVideoWrap) {
    heroVideoWrap.innerHTML = '';
  }

  // Create canvas
  var threeCanvas = document.createElement('canvas');
  threeCanvas.id = 'matrix-canvas';
  threeCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;';
  if (heroVideoWrap) {
    heroVideoWrap.appendChild(threeCanvas);
  } else {
    var hero = document.querySelector('.hero');
    if (hero) {
      hero.insertBefore(threeCanvas, hero.firstChild);
    }
  }

  // Three.js inline (minimal build)
  // We'll use a CDN-loaded Three.js
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = function() {
    initMatrix();
  };
  document.head.appendChild(script);

  function initMatrix() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle system for Matrix rain
    var particleCount = 5000;
    var positions = new Float32Array(particleCount * 3);
    var colors = new Float32Array(particleCount * 3);
    var sizes = new Float32Array(particleCount);
    var velocities = new Float32Array(particleCount);

    for (var i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Green Matrix colors with variation
      colors[i * 3] = 0.1 + Math.random() * 0.2;
      colors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
      colors[i * 3 + 2] = 0.2 + Math.random() * 0.2;

      sizes[i] = Math.random() * 2 + 0.5;
      velocities[i] = Math.random() * 0.5 + 0.2;
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Shader material for particles
    var vertexShader = `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    var fragmentShader = `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - dist * 2.0;
        gl_FragColor = vec4(vColor, alpha * 0.8);
      }
    `;

    var material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    var particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 20;

    // Overlay text
    var overlay = document.createElement('div');
    overlay.id = 'matrix-overlay';
    overlay.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;pointer-events:none;text-align:center;';
    overlay.innerHTML = '<h1 style="font-family:monospace;font-size:clamp(24px,6vw,64px);color:#00ff66;text-shadow:0 0 20px #00ff66,0 0 40px #003311;letter-spacing:.15em;font-weight:300;animation:fadeInOut 4s ease-in-out infinite alternate;">THE HUMAN ARCHITECT<br><span style="font-size:0.4em;opacity:0.7;">HAS YOU</span></h1>';
    if (heroVideoWrap) {
      heroVideoWrap.appendChild(overlay);
    }

    // Add CSS animation
    var style = document.createElement('style');
    style.textContent = '@keyframes fadeInOut{0%,100%{opacity:0.8}50%{opacity:1}}';
    document.head.appendChild(style);

    // Mouse interaction
    var mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', function(e) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation loop
    var clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);

      var delta = clock.getDelta();
      var pos = geometry.attributes.position.array;

      for (var i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] -= velocities[i] * delta * 10;
        if (pos[i * 3 + 1] < -25) {
          pos[i * 3 + 1] = 25;
          pos[i * 3] = (Math.random() - 0.5) * 50;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Subtle camera movement based on mouse
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Slow rotation
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Fade out overlay after 8 seconds, reveal site content
    setTimeout(function() {
      if (overlay) {
        overlay.style.transition = 'opacity 2s ease';
        overlay.style.opacity = '0';
        setTimeout(function() { overlay.remove(); }, 2000);
      }
    }, 8000);

    console.log('Three.js Matrix intro initialized');
  }
})();
