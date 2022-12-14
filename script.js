// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' });
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from('.sidebar', { duration: 1, x: '-100vh', delay: 1, stagger: 0.5 });
// gsap.fromTo(
//   'button',
//   { rotation: 700, scale: 0, opacity: 0 },
//   { duration: 1, rotation: 0, scale: 1, opacity: 1, delay: 3 }
// );

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.link', { opacity: 0, stagger: 0.5 })
  .from('.sidebar', { x: '-100vh', stagger: 0.5 }, 1)
  .fromTo('button', { rotation: 700, scale: 0, opacity: 0 }, { rotation: 0, scale: 1, opacity: 1 });

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  timeline.reverse(3);
});
