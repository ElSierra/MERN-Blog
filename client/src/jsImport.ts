function loadScript() {
  const script = document.createElement("script");
  script.src = "/assets/js/index.js";
  script.async = true;
  document.body.appendChild(script);
}

export default loadScript;
