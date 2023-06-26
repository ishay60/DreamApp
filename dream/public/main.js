import { response } from "express";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showSpinner();

  const data = new FormData(form);
  try {
    const response = await fetch("http://localhost:8080/dream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: data.get("prompt"),
      }),
    });
  } catch (e) {
    console.log("there is a problem:", e);
    response.status(500).send(error?.response.data.error.message);
  }

  if (response.ok) {
    const { image } = await response.json();
  } else {
    alert(err);
    const err = await response.text();
  }
  hideSpinner();
  const result = document.querySelector("#result");
  result.innerHTML = `<img src="${image}" width="512" />`;
});

function showSpinner() {
  const button = document.querySelector("button");
  button.disabled = true;
  button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}

function hideSpinner() {
  const button = document.querySelector("button");
  button.disabled = false;
  button.innerHTML = "Dream";
}
