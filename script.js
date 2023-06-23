const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      buttons.forEach((btn) => {
        if (btn !== button) btn.classList.remove('active');
      });
    }
  });
});
