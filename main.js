const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e){
  let windowsScroll = document.documentElement.scrollTop || document.body.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percent = windowsScroll / windowHeight * 100;

  progress.style.width = percent + '%';
}