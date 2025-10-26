// mobile menu
document.getElementById("mobile").addEventListener("click", () => {
  // document.getElementById("sidebar").classList.toggle("left-[100%]");

  requestAnimationFrame(() => {
    document.getElementById("sidebar").classList.toggle("left-0");
    document.getElementById("sidebar").classList.toggle("left-[-100%]");
  });

  let topx = document.getElementById("topx");

  topx.classList.toggle("absolute");
  topx.classList.toggle("transition-all");
  topx.classList.toggle("rotate-45");
  topx.classList.toggle("origin-center");

  let bottomx = document.getElementById("bottomx");
  bottomx.classList.toggle("absolute");
  bottomx.classList.toggle("transition-all");
  bottomx.classList.toggle("-rotate-45");
  bottomx.classList.toggle("origin-center");

  document.getElementById("disappear").classList.toggle("hidden");
  // document.getElementById("sidebar").classList.add("right-[0]");
});
