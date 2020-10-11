const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,3}$/gi;

function submitForm() {
  const name = document.getElementById('name-input').value;
  if (!name.length) {
    window.alert('Missing name');
    return false;
  }

  const email = document.getElementById('email-input').value;
  if (!isEmail.test(email)) {
    window.alert('Missing a valid email');
    return false;
  }

  const message = document.getElementById('message-input').value;
  if (!message.length) {
    window.alert('Missing message');
    return false;
  }
  window.alert('Successfully submitted');
  return true;
}
