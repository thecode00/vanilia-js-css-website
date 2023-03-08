let body = document.body;
body.onclick = function (e) {
  // 이미지 배열, 경로는 현재 js파일의 위치가아닌 js를 사용하는 html파일기준
  let images = [
    'url("../../images/clr01.png")',
    'url("../../images/clr02.png")',
    'url("../../images/clr03.png")',
    'url("../../images/clr04.png")',
    'url("../../images/clr05.png")',
    'url("../../images/clr06.png")',
    'url("../../images/clr07.png")',
    'url("../../images/clr08.png")',
    'url("../../images/clr09.png")',
  ];
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;

  let splash = document.createElement("span");
  splash.style.left = x + "px";
  splash.style.top = y + "px";

  let bg = images[Math.floor(Math.random() * images.length)];
  splash.style.backgroundImage = bg;

  this.appendChild(splash); // 화살표함수를 쓰면 this를 못쓰므로 함수선언을 사용
  setTimeout(() => {
    // 4초후에 사라지게 함
    splash.remove();
  }, 4000);
};
