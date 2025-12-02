const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      modal.hide();
      formLogin.reset();
    });
document.querySelectorAll('.flip').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.remove('unflipped');
    card.classList.add('flipped');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('flipped');
    card.classList.add('unflipped');
  });
});