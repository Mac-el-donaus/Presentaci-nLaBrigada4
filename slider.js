document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicators button');
  const prevBtn = document.querySelector('.controls .prev');
  const nextBtn = document.querySelector('.controls .next');
  let idx = 0;

  function showSlide(i) {
    if (i < 0) i = slides.length - 1;
    if (i >= slides.length) i = 0;
    document.querySelector('.slides').style.transform = `translateX(-${i * 100}%)`;
    indicators.forEach(btn => btn.classList.remove('active'));
    indicators[i].classList.add('active');
    idx = i;
  }

  prevBtn.addEventListener('click', () => showSlide(idx - 1));
  nextBtn.addEventListener('click', () => showSlide(idx + 1));
  indicators.forEach((btn, i) =>
    btn.addEventListener('click', () => showSlide(i))
  );

  // Auto-play cada 5s
  setInterval(() => showSlide(idx + 1), 5000);
});
