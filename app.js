/** @format */

function colorChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/*progress_bar function starts here*/
let currentActive = 0;

const progress = document.getElementById("progress_bar");
// //const nextButton = document.getElementById("next");
// const prevButton = document.getElementById("prev");
const sections = document.querySelectorAll("section");

counter = 1;

/* next button function starts here*/
// nextButton.addEventListener("click", () => {
//   if (currentActive < progress.length - 1) {
//     section[currentActive + 1].nextbtn();
//   }
//   console.log(currentActive);
// });

// prevButton.addEventListener("click", function () {
//   if (currentActive > 0) {
//     section[currentActive - 1].previousbtn();
//   }
// });

// /* Previous button function starts here*/

let progressbar_width = 20;

function nextbtn() {
  if (counter < 5) {
    counter++;

    progressbar_width = counter * 20;
    progress.style.width = progressbar_width + "%";

    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById("prev").disabled = false;
    let id = "sec" + counter;
    document.getElementById(id).style.display = "block";
    counter > 4
      ? (document.getElementById("next").disabled = true)
      : (document.getElementById("next").disabled = false);
  }
}

function previousbtn() {
  if (counter > 1) {
    counter--;
    document.getElementById("next").disabled = false;
    progressbar_width = parseInt(progress.style.width) - 20;
    progress.style.width = progressbar_width + "%";
    let id = "sec" + counter;

    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
    //alert(counter);
    counter <= 1
      ? (document.getElementById("prev").disabled = true)
      : (document.getElementById("prev").disabled = false);
  }
}

//how to remove previous button function in first page?
{
  /* <div class="container">
  <img id="myImg" src="step1.png">
  <button class="btn1" onclick='next()'>Напред</button>
  <button class="btn4" onclick='prev()'>Назад</button>
</div>

<script>
var curPage=1;
function checkButtons(){
  document.getElementsByClassName("btn1").style.display = 'inline-block';
  document.getElementsByClassName("btn4").style.display = 'inline-block';
  if(curPage === 1)
    document.getElementsByClassName("btn1").style.display = 'none';
  if(curPage === 11)
    document.getElementsByClassName("btn4").style.display = 'none';
}
function next(){
    curPage++;
    checkButtons();
    document.getElementById("myImg").src = "step"+curPage+".png";
}

function prev(){
  curPage--;
  checkButtons();
  document.getElementById("myImg").src = "step"+curPage+".png";
}


</script> */
}
