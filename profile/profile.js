var flying = setInterval(() => {
  var bird = document.getElementsByClassName('bird')
  bird[0].hidden ^= 1
  bird[1].hidden ^= 1
}, 100);

var tik = setInterval(() => {
  var lyf = document.getElementById('digit')
  var tag = document.getElementById('tagline')
  var birds = document.getElementById('birds')
  lyf.classList.toggle("digit");
  if (lyf.innerText == 1) {
    lyf.innerText = "Blue Edge"
    lyf.classList.toggle("name");
    birds.classList.toggle("birds");
    birds.hidden = false;
    setTimeout(() => {
      clearInterval(flying)
      // birds.children[1].style.display = "none";
      // birds.children[0].classList.toggle("bird")
      // birds.children[0].hidden = false;
      // birds.children[1].classList.toggle("bird")
    }, 1500)
    document.getElementById('container').classList.toggle("containeroverlay")
    tag.style.display = "block";
    tag.classList.toggle("tagline");
    clearInterval(tik)
  } else {
    lyf.innerText -= 1
  }
  lyf.classList.toggle("digit");
}, 1000)
