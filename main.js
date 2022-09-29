/*Kapcsolja be a linkek mutatását amikor a felhasználó rákattint a menüre vagy az ikonra*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }