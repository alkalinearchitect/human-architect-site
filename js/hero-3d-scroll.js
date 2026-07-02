/**
 * Matrix Hero Video + 3D Scroll Effect
 * Replaces the static video with AI-generated Matrix video
 * Adds GSAP-powered 3D scroll parallax
 */
(function() {
  'use strict';

  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    // Load GSAP + ScrollTrigger
    var gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    gsapScript.onload = function() {
      var scrollScript = document.createElement('script');
      scrollScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      scrollScript.onload = initHero;
      document.head.appendChild(scrollScript);
    };
    document.head.appendChild(gsapScript);
  } else {
    initHero();
  }

  function initHero() {
    gsap.registerPlugin(ScrollTrigger);

    var hero = document.querySelector('.hero');
    var videoWrap = document.querySelector('.hero-video-wrap');
    var headlineWrap = document.querySelector('.hero-headline-wrap');

    if (!hero || !videoWrap) return;

    // 3D parallax on scroll
    gsap.to(videoWrap, {
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      scale: 1.3,
      y: -100,
      rotationX: 5,
      ease: 'none'
    });

    // Headline fade and scale
    if (headlineWrap) {
      gsap.to(headlineWrap, {
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'center top',
          scrub: 1
        },
        opacity: 0,
        scale: 0.9,
        y: -50,
        ease: 'none'
      });
    }

    // Video overlay fade
    var overlay = document.querySelector('.hero-overlay');
    if (overlay) {
      gsap.to(overlay, {
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '60% top',
          scrub: 1
        },
        opacity: 0,
        ease: 'none'
      });
    }

    console.log('Matrix hero 3D scroll initialized');
  }
})();
