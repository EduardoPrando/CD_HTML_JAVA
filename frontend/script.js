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

const onFormSubmit = async () => {
  const data = formInputs();
  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  document.location.reload(true);
}

const removeData = async (id) => {
  const deleteUrl = `${BACKEND_URL}/${id}`;
  await fetch(deleteUrl, { method: 'DELETE' });
  document.location.reload(true);
}

const insertDataInTR = (data) => {
  const newTr = document.createElement("TR");
  Object.values(data).forEach((element, index) => {
    const newTd = document.createElement("TD");
    index === 0
      ? newTd.innerHTML = document.querySelector("tbody").childElementCount + 1
      : newTd.innerHTML = element;
      newTr.appendChild(newTd);
  });

  createNewRemoveButton(newTr, data.id);
  document.getElementById('tBodyRow').appendChild(newTr);
}

const createNewRemoveButton = (table, id) => {
  const newTdButton = document.createElement("input");
  newTdButton.type = "button";
  newTdButton.value = "Remover";
  newTdButton.onclick = () => removeData(id);
  table.appendChild(newTdButton);
}

window.addEventListener('load', () => getAllUsers());