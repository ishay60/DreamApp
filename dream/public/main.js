form.addEventListener("submit", async (e) => {
  e.preventDefault();

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

    const { image } = await response.json();

    const result = document.querySelector("#result");
    result.innerHTML = `<img src="${image}" width="512" />`;
  } catch (e) {
    console.log("there is a problem:", e);
  }
});
