const form = document.querySelector('.bot__form form');
const input = document.querySelector('input');
const dataBase = {
  'Как дела': 'Хорошо! Как сам?',
  'Как погода': 0,
};
const botAnswer = document.querySelector('#bot__answer');
const animationType = 'animate__headShake';

const handleAnimationEnd = () => botAnswer.classList.remove(animationType);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = e.target.question.value;
  const answer = dataBase[value];

  if (value) {
    if (answer !== undefined) {
      botAnswer.innerText = answer;
    } else {
      botAnswer.innerText = 'Я не знаю ответ на данный вопрос.';
    }

    botAnswer.classList.add(animationType);
    botAnswer.addEventListener('animationend', handleAnimationEnd, {
      once: true,

    });
    input.value = '';
  }
});
