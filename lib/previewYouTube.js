/* ====================================
Загрузка iframe при клике
==================================== */
var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
	s = document.createElement("style");
	s.type = "text/css";
	document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
	y = v[n];
	i = document.createElement("img");
	i.setAttribute("src", "https://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
	i.setAttribute("class", "thumb");
	c = document.createElement("div");
	c.setAttribute("class", "play");
	y.appendChild(i);
	y.appendChild(c);
	y.onclick = function () {
		var a = document.createElement("iframe");
		// Формирование ссылки на видео, взяв id у блока
		a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0");
		a.setAttribute("allowfullscreen", "");
		a.style.width = this.style.width;
		a.style.height = this.style.height;
		this.parentNode.replaceChild(a, this)
	}
};

/* В разметке есть блок родительский блок .video-container.
В нем находиться блок .youtube. Скрипт берет id этого блока и подставляет в уже заготовленную ссылку. 
Этот id является частью ссылки на видео. 
Например, (Заготовленная часть) [id блока] - (https://www.youtube.com/embed/)[KwMGI9eaVh4] */