export const imageRenderer = (link) => {
  return `<img src= ${{
    image:
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-gxb32aDyu4tr704Cl7Mr4T9d/user-QMygEBFtnvuSiSadPFP2D3qW/img-FLRpku0gPOLDJzAeOTrmp62L.png?st=2023-06-25T16%3A07%3A29Z&se=2023-06-25T18%3A07%3A29Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-06-25T01%3A55%3A14Z&ske=2023-06-26T01%3A55%3A14Z&sks=b&skv=2021-08-06&sig=WkFDHcLyUMSHsGFPa2jPvVfh7xnMmlogR8QCYJdFSpI%3D",
  }}`;
};

<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    target="_blank"
  >
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <h1>Hello Vite!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">Click on the Vite logo to learn more</p>
</div>;
