document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fotos__item').forEach((carousel) => {
    const track = carousel.querySelector('.fotos__track');
    const boxes = carousel.querySelectorAll('.fotos__box');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');

    let index = 0;

    const cs = getComputedStyle(track);
    const isReversed =
      cs.direction === 'rtl' || cs.flexDirection.startsWith('row-reverse');

    function getNearestIndex() {
      const leftEdge = carousel.getBoundingClientRect().left;
      let nearest = 0, min = Infinity;
      boxes.forEach((b, i) => {
        const dx = Math.abs(b.getBoundingClientRect().left - leftEdge);
        if (dx < min) { min = dx; nearest = i; }
      });
      return nearest;
    }

    function goTo(i) {
      if (!boxes.length) return;
      index = (i + boxes.length) % boxes.length;
      boxes[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }

    next?.addEventListener('click', () => {
      index = getNearestIndex();
      goTo(index + (isReversed ? -1 : 1));
    });

    prev?.addEventListener('click', () => {
      index = getNearestIndex();
      goTo(index + (isReversed ? 1 : -1));
    });
  });
});
