const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,3}$/gi;

function submitForm() {
  let error = false;

  const name = document.getElementById('name-input').value;
  if (!name.length) {
    error = true;
  }

  const message = document.getElementById('message-input').value;
  if (!message.length) {
    error = true;
  }

  const email = document.getElementById('email-input').value;
  if (!isEmail.test(email)) {
    error = true;
  }

  if (error) {
    return false;
  }

  return true;
}
