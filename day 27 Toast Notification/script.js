const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Device locked',
  'ASDJFFHH1JF assigned to Jeffery Abbott',
  'Data is missing',
  'New laptop enrolled',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(getRandomType());
  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
