var cat = document.querySelector("#cat");

var animation = anime({
  targets: cat,
  translateY: [0, -50],
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
  duration: 800,
});
