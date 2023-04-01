(()=>{

	const	lyrictBtn = document.querySelector("#lyricBtn"),
	lyric = document.querySelector("#lyric");

	let toggle = false;

	function toggleLyric() {
		if(toggle){
			toggle = false;
			lyricBtn.textContent = "Show";
			lyric.style.display = "none";

		} else {
			toggle = true;
			lyricBtn.textContent = "Hide";
			lyric.style.display = "block";
		}
	}

	lyricBtn.addEventListener("click", toggleLyric);



})();
