// Challenge 1:

function name() {
  var user = document.getElementById("user");
  if (user) {
      user.innerHTML = "Your Name";
  }
}
window.onload = name;

// Challenge 2:

function button() {
  var btn = document.getElementById("btn-click");
  if (btn) {
      btn.style.backgroundColor = "#3498db"; 
  }
}
document.getElementById("btn-click").onclick = button;

//Challenge 3:

function makeSentence() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adverb = document.getElementById("adverb").value;

  var sentence = noun + " " + verb + " " + adverb + ".";
  document.getElementById("statement").innerHTML = sentence;
}

document.getElementById("build-button").addEventListener("click", makeSentence);

//challenge 4:

  const grandparent = document.getElementById("grandparent");
  grandparent.addEventListener("click", function (event) {

    const clickedDiv = event.target;

    if (clickedDiv.id === "grandparent") {
      console.log("Grandparent clicked");
    } else if (clickedDiv.id === "parent") {
      console.log("Parent clicked");
    } else if (clickedDiv.id === "child") {
      console.log("Child clicked");
    }
  });

//challenge 5:

 const list = document.getElementById("category");

 list.addEventListener("click", function (click) {
   if (click.target.tagName === "LI" && click.target.id) {
     console.log(click.target.id);
   }
 });

