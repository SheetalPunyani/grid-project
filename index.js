const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobilenav = document.querySelector(".mobilenav");

hamburger.addEventListener("click", () => {
	bar1.classList.toggle("animatebar1");
	bar2.classList.toggle("animatebar2");
	bar3.classList.toggle("animatebar3");
	mobilenav.classList.toggle("opendrawer");
});
