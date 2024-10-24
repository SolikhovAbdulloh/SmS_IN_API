let API = "http://localhost:3000/Users";

fetch(API)
  .then((response) => response.json())
  .then((data) => AddUI(data));

const kirish1 = document.getElementById("kirish1");
const kirish2 = document.getElementById("kirish2");
const send1 = document.getElementById("send1");
const send2 = document.getElementById("send2");
const chatOynasi1 = document.getElementById("chat-oynasi1");
const chatOynasi2 = document.getElementById("chat-oynasi2");

const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const span = document.getElementsByClassName("close")[0];
let currentMessage = null;

function AddUI(data) {
  data.forEach((e) => {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.textContent = e.user1;
    p2.textContent = e.user2;

    p1.addEventListener("dblclick", () => showModal(p1));
    p2.addEventListener("dblclick", () => showModal(p2));

    chatOynasi1.appendChild(p1);
    chatOynasi2.appendChild(p2);
  });
}

send1.addEventListener("click", () => {
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.textContent = kirish1.value;
  p2.textContent = kirish1.value;

  p1.addEventListener("dblclick", () => showModal(p1));
  p2.addEventListener("dblclick", () => showModal(p2));

  chatOynasi1.appendChild(p1);
  chatOynasi2.appendChild(p2);

  kirish1.value = "";
});

send2.addEventListener("click", () => {
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.textContent = kirish2.value;
  p2.textContent = kirish2.value;

  p1.addEventListener("dblclick", () => showModal(p1));
  p2.addEventListener("dblclick", () => showModal(p2));

  chatOynasi1.appendChild(p1);
  chatOynasi2.appendChild(p2);

  kirish2.value = "";
});

function showModal(message) {
  currentMessage = message;
  modalText.textContent = currentMessage.textContent;
  modal.style.display = "block";
}

span.addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("edit").addEventListener("click", function () {
  let newText = prompt("Yangi matnni kiriting:", currentMessage.textContent);
  if (newText) {
    currentMessage.textContent = newText;
  }
  modal.style.display = "none";
});

document.getElementById("delete").addEventListener("click", function () {
  currentMessage.remove();
  modal.style.display = "none";
});
