function loadScript() {
  const script = document.createElement("script");
  script.src = "/assets/js/index.js";
  script.async = true;
  document.body.appendChild(script);
}
export function loadNewScript() {
  const script = document.createElement("script");
  script.src = "/assets/js/LS.js";
  script.async = true;
  document.body.appendChild(script);
}
export default loadScript;
