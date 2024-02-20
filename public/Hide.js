function myFunction() {
  var x = document.getElementById("cool");
  if (
    window.location.href === "https://skill-swap-2fe5e.web.app/conference" ||
    window.location.href === "http://localhost:3000/conference"
  ) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

myFunction();
