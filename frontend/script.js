const BACKEND_URL = 'http://localhost:8080';

const formInputs = () => {
  return {
    "name": document.getElementById('nameInput').value,
    "email": document.getElementById('emailInput').value,
    "telephone": document.getElementById('telephoneInput').value,
    "profession": document.getElementById('professionInput').value,
  }
}

const getAllUsers = async () => {
  const response = await fetch(BACKEND_URL);
  const data = await response.json();
  data.forEach(element => {
    insertDataInTR(element);
  });
}