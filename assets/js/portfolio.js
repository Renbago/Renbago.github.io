(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("video[data-autoplay]").forEach((video) => {
    if (reducedMotion) return;
    const play = video.play();
    if (play && typeof play.catch === "function") play.catch(() => {});
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
