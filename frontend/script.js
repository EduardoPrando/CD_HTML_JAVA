const BACKEND_URL = 'http://localhost:8080';

const formInputs = () => {
  return {
    "name": document.getElementById('nameInput').value,
    "email": document.getElementById('emailInput').value,
    "telephone": document.getElementById('telephoneInput').value,
    "profession": document.getElementById('professionInput').value,
  }
}